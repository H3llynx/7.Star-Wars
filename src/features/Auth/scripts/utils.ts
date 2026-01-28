
export const handleErrorMessage = (errorCode: string) => {
    const errorText: Record<string, string> = {
        "auth/email-already-in-use": "ERROR: CREDENTIALS ALREADY REGISTERED IN SYSTEM DATABASE",
        "auth/invalid-email": "ERROR: INVALID EMAIL FORMAT DETECTED",
        "auth/weak-password": "ERROR: PASSWORD STRENGTH INSUFFICIENT - MINIMUM 6 CHARACTERS REQUIRED",
    };

    return errorCode
        ? errorText[errorCode] || "ERROR: AUTHENTICATION FAILED - PLEASE TRY AGAIN"
        : "ERROR: SYSTEM FAILURE - AUTHENTICATION PROCESS INTERRUPTED";
};