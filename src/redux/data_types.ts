
export type Job = {
    id: number
    job_title: string
    company: {
        name: string
        address: string
        image: string
    
    }
    type: string
    salary: number
    createdAt: Date
    updatedAt: Date
}