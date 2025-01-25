import axios from 'axios';
import { LICENSE_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL } from './apiEndpoints';

export const getLicense = async () => {
    try {
        const res = await axios.get(LICENSE_URL);
        return res.data;
    } catch (err) {
        console.log("Couldn't get LICENSE.md")
        throw err;
    }
}

export const getPrivacyPolicy = async () => {
    try {
        const res = await axios.get(PRIVACY_POLICY_URL);
        return res.data;
    } catch (err) {
        console.log("Couldn't get PRIVACY_POLICY.md")
        throw err;
    }
}

export const getTermsAndConditions = async () => {
    try {
        const res = await axios.get(TERMS_AND_CONDITIONS_URL);
        return res.data;
    } catch (err) {
        console.log("Couldn't get TERMS_CONDITIONS.md")
        throw err;
    }
}