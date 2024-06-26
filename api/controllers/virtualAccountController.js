import fetch from 'node-fetch';
import dotenv from 'dotenv'

dotenv.config();

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

export const createVirtualAccount = async (req, res, next) => {
    try {
        const { email, name, phoneNumber, bankcode, account_type, businessid, bvn } = req.body;

        const options = {
            method: "POST",
            body: JSON.stringify({
                email,
                name,
                phoneNumber,
                bankcode,
                account_type,
                businessid,
                bvn
            }),
            headers: {
                'api-key': apiKey,
                'api-secret': `Bearer ${apiSecret}`,
                'Content-Type': 'application/json'
            }
        };

        const apiResponse = await fetch('https://api.payvessel.com/api/external/request/customerReservedAccount', options);
        
        if (!apiResponse.ok) {
            const errorText = await apiResponse.json();
            throw new Error(`Error: ${apiResponse.status} - ${errorText}`);
        }

        const data = await apiResponse.json();
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};
