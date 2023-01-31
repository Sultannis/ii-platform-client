export type EducationalInstitutionDao = {
    id: number;
    user_id: number;
    institution_name: string;
    description?: string;
    level_of_education: string;
    country: string;
    start_date: string;
    end_date: string;
    created_at: string;
};