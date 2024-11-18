export function validateEnvVariables() {
    const requiredVars = [
        'LISTMONK_URL',
        'LISTMONK_USERNAME',
        'LISTMONK_PASSWORD',
        'LIST_ID'
    ];

    const missingVars = requiredVars.filter((variable) => !process.env[variable]);

    if (missingVars.length > 0) {
        console.error(`Error: Missing environment variables: ${missingVars.join(', ')}`);
        process.exit(1); // Exit the application with a failure code
    }
    console.log('All required environment variables are set.');
}
