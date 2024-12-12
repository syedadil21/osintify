import { createClient } from '@supabase/supabase-js'
import toast from 'react-hot-toast';

// Create a single supabase client for interacting with your database
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const addScan = async (name, target, result) => {
    const { data, error } = await supabase
        .from('Scans')
        .insert([
            { name: name, target: target, result: result },
        ])
        .select()

    if (error) {
        toast.error(error.message);
        return false;
    }
    return data;
}

export const getScans = async () => {
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError) {
        toast.error(userError.message)
        return false;
    }

    let { data: Scans, error } = await supabase
        .from('Scans')
        .select('*')
        .eq("user_id", userData.user.id)

    if (error) {
        toast.error(error.message)
        return false;
    }

    console.log("Scans", Scans);
    return Scans;
}

export const getScanById = async (id) => {
    let { data: Scans, error } = await supabase
        .from('Scans')
        .select('*')
        .eq("id", id)

    if (error) {
        toast.error(error.message)
        return false;
    }

    
    if(Scans.length > 0)
    {
        console.log("Scans", Scans[0]);
        return Scans[0];
    }
    return Scans
}