import express, { Request, Response } from 'express';
import { fetchDataFromDataSource, saveDataToDataSource, updateDataInDataSource, deleteDataFromDataSource } from '../services/dataService';

const router = express.Router();

// GET request handler
router.get('/', async (req: Request, res: Response) => {
    try {
        const data = await fetchDataFromDataSource();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

// POST request handler
router.post('/', async (req: Request, res: Response) => {
    try {
        const heroData = req.body;
        const savedData = await saveDataToDataSource(heroData);
        res.json(savedData);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

// PUT request handler
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const heroData = req.body;
        const id = req.params.id;
        const updatedData = await updateDataInDataSource(id, heroData);
        res.json(updatedData);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

// DELETE request handler
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteDataFromDataSource(id);
        res.status(200).send('Data deleted successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

export default router;