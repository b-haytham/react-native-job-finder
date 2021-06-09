import { ReactNode } from "react"

export type Job = {
    id: number
    job_title: string
    company: {
        name: string
        address: string
        image: string
    
    }
    type: 'Full time' | 'Part time' | 'Contract' | 'Temporary' | 'Internship'
    salary: {
        min: number
        max: number
    } | null
    posted: string
    location: string
    discription: string[],
    highlights: string[],
    requirements: string[]
    categories: JobCategory[]
}

export type JobCategory = {
    id: number
    name: string
}