import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({isHome = false}) => {
  // backend
  const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const apiUrl = isHome ? "/api/jobs?_limit=3" : '/api/jobs' // limit the number of items apperating in the home page to 3
          const res = await fetch(apiUrl);
          const data = await res.json();
        setJobs(data);
        } catch (error) {
          console.log('Error fetching data', error);
        } finally {
          setLoading(false);
        }
        
      }

      fetchJobs();
    }, [])

  return (
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>
            {loading ? (<Spinner loading={loading}/>) :(
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Job listing function to fetch the data from jobs.json and render the data in a list using JobListing component */}
                {jobs.map((job) => (
                  <JobListing key={job.id} job={job}/>
              ))}
              </div>
            )}
            
        </div>
    </section>
  )
}

export default JobListings;