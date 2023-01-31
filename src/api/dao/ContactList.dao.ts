export type ContactListDao = {
    id: number;
    user_id: number;
    email?: string;
    phone_number?: string;
    linkedin_link?: string;
    github_link?: string;
    telegram_nickname?: string;
    created_at: string;
    updated_at: string;
}