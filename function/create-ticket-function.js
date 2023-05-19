const { IamAuthenticator } = require("ibm-cloud-sdk-core");
const axios = require("axios");

async function main(params) {
    console.log(params)
    const authenticator = new IamAuthenticator({
        apikey: "<your_api_key>",
    });

    const options = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    await authenticator.authenticate(options);

    const offeringType = {
        group: "crn_service_name",
        key: "cloud-object-storage",
    };

    const offeringPayload = {
        name: "Cloud Object Storage",
        type: offeringType,
    };

    const caseParams = {
        type: "technical",
        subject: "Example technical case",
        description: "This is a test support case that was oppened via script, and can be imediatelly resolved by the support team. Sorry for any inconvenience while this script is being tested",
        offering: offeringPayload,
        severity: 4,
    };

    console.log(caseParams);

    try {
        const res = await axios.post("https://support-center.cloud.ibm.com/case-management/v1/cases", caseParams, options);
        console.log(res.status);
    } catch (e) {
        console.warn(e);
    }

    console.log("Support ticket created");
    return { message: "Support ticket created" };
}