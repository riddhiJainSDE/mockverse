import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

export const UserAnswer = pgTable('userAnswer',{
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId', { length: 256 }).notNull(),
    question : varchar('question',{ length: 256 }).notNull(),
    correctAns:text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating:varchar('rating',{ length: 256 }),
    userEmail:varchar('userEmail',{ length: 256 }),
    createdAt: varchar('createdAt',{ length: 256 }),
})