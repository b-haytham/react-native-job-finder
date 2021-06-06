import { Job } from "./data_types";

export const JOBS: Job[] = [
    {
        id: 0,
        company: {
            name: 'Google',
            address: 'CA, Unated Stated',
            image: 'http://pngimg.com/uploads/google/google_PNG19635.png'
        },
        job_title: 'React.js Developer',
        salary: 8,
        type: 'Full time',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]