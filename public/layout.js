// Function to fetch vendors by location
function searchByLocation() {
    const location = document.getElementById('locationInput').value;
    fetch(`http://localhost:5000/api/vendors/location?location=${location}`)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Function to fetch vendors by service
  function searchByService() {
    const service = document.getElementById('serviceInput').value;
    fetch(`http://localhost:5000/api/vendors/service?service_name=${service}`)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error:', error));
  }
  
  // Function to display vendor results
  function displayResults(vendors) {
    const vendorList = document.getElementById('vendorList');
    vendorList.innerHTML = '';
  
    if (vendors.length === 0) {
      vendorList.innerHTML = '<li>No vendors found.</li>';
      return;
    }
  
    vendors.forEach(vendor => {
      const vendorItem = document.createElement('li');
      vendorItem.textContent = `${vendor.name} - Location: ${vendor.location} - Services: ${vendor.services.join(', ')}`;
      vendorList.appendChild(vendorItem);
    });
  }
  