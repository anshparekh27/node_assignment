const express = require('express');
const router = express.Router();
const Worker = require('../models/worker');

// Route to get filtered, sorted, and paginated workers
router.get('/workers', async (req, res) => {
    try {
        // Build the filter object based on query parameters
        const filter = {};
        if (req.query.DEPARTMENT) {
            filter.DEPARTMENT = req.query.DEPARTMENT;
        }
        if (req.query.MIN_SALARY) {
            filter.SALARY = { $gte: parseInt(req.query.MIN_SALARY) }; // Minimum salary filter
        }
        if (req.query.MAX_SALARY) {
            filter.SALARY = filter.SALARY || {};
            filter.SALARY.$lte = parseInt(req.query.MAX_SALARY); // Maximum salary filter
        }

        // Sorting parameters
        const sortBy = req.query.sortBy || 'SALARY';
        const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

        // Pagination parameters
        const page = parseInt(req.query.page) || 1; // Default to page 1
        const limit = parseInt(req.query.limit) || 10; // Default to 10 results per page
        const skip = (page - 1) * limit; // Calculate the number of documents to skip

        console.log(`Filtering by:`, filter);
        console.log(`Sorting by: ${sortBy}, Order: ${sortOrder}`);
        console.log(`Page: ${page}, Limit: ${limit}`);
        
        // Fetch, filter, sort, and paginate workers
        const workers = await Worker.find(filter)
                                    .sort({ [sortBy]: sortOrder })
                                    .skip(skip)
                                    .limit(limit);
        
        // Get the total count of documents matching the filter
        const totalCount = await Worker.countDocuments(filter);

        // Prepare the response with pagination metadata
        res.json({
            page,
            limit,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            workers
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new worker
router.post('/workers', async (req, res) => {
    try {
        const {
            WORKER_ID,
            FIRST_NAME,
            LAST_NAME,
            SALARY,
            JOINING_DATE,
            DEPARTMENT
        } = req.body;

        const worker = new Worker({
            WORKER_ID,
            FIRST_NAME,
            LAST_NAME,
            SALARY,
            JOINING_DATE,
            DEPARTMENT
        });

        await worker.save(); // Save the new document
        console.log('Worker created:', worker);
        res.status(201).json(worker);
    } catch (error) {
        console.error('Error creating worker:', error);
        res.status(500).json({ message: 'Error creating worker' });
    }
});

module.exports = router;
