/** @type { import("drizzle-kit").Config } */
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:R2nLBmFOGQA1@ep-divine-hall-a5rc7w1z.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
};