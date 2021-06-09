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
    coordinates: {lat: number, lan: number}
}

export type User = {
    id: number
    image: string
    full_name: string,
    job_title: string,
    main_info: {
        job_title: string
        location: string
        birth_day: string
    },
    contact_info: {
        email: string
        phone: string
        facebook?: string
        tweeter?: string
    },
    about: string
    work_experiences: {position_title: string, where: string, image?: string, duration: string}[]
    skills: string[]
    education: {
        university_name: string
        degree_name: string
        duration: string
    }
}

export type JobCategory = {
    id: number
    name: string
}