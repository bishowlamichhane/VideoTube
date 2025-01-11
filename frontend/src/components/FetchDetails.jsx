import { useEffect } from "react";

const FetchDetails = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Define async function inside useEffect
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("/api/v1/users/current-user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userDetails = await response.json();
          console.log("User Details:", userDetails);
        } else {
          console.log("Error fetching details");
        }
      } catch (err) {
        console.log("Error:", err);
      }
    };

    // Call the async function
    fetchUserDetails();
  }, [token]); // Adding token as a dependency (optional)

  return <div>FetchDetails</div>;
};

export default FetchDetails;
