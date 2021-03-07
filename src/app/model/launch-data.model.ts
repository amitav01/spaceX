interface LaunchData {
    mission_name: string;
    flight_number: number;
    launch_year: string;
    launch_success: boolean;
    mission_id: any[];
    links: {mission_patch: string};
    rocket: {first_stage?: {cores?: [{land_success: boolean}]}}
}
