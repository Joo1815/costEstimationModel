// Cost Estimation Model

// Function to calculate the total cost
function calculateTotalCost() {
    // Input values
    const associateCount = parseInt(document.getElementById("associateCount").value);
    const associateCost = parseFloat(document.getElementById("associateCost").value);
    const smeCount = parseInt(document.getElementById("smeCount").value);
    const smeCost = parseFloat(document.getElementById("smeCost").value);
    const timeInHours = parseFloat(document.getElementById("time").value);
  
    // Validation
    if (isNaN(associateCount) || isNaN(associateCost) || isNaN(smeCount) || isNaN(smeCost) || isNaN(timeInHours)) {
      alert("Please enter valid numeric values for all fields.");
      return;
    }
  
    // Calculating the total costs
    const totalAssociateCost = associateCount * associateCost * timeInHours;
    const totalSmeCost = smeCount * smeCost * timeInHours;
    const totalCost = totalAssociateCost + totalSmeCost;
  
    // Display the individual and total costs
    document.getElementById("result").innerHTML = `
      <p>Total Associate Cost: $${totalAssociateCost.toFixed(2)}</p>
      <p>Total SME Cost: $${totalSmeCost.toFixed(2)}</p>
      <p><strong>Total Cost: $${totalCost.toFixed(2)}</strong></p>
    `;
  }
  
  // HTML structure for the model
  document.body.innerHTML = `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 500px; margin: 50px auto; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h2 style="text-align: center; color: #333;">Cost Estimation Model</h2>
      <div style="margin-bottom: 15px;">
        <label for="associateCount" style="display: block; font-weight: bold; margin-bottom: 5px;">Number of Associates:</label>
        <input type="number" id="associateCount" placeholder="Enter number of associates" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
      </div>
  
      <div style="margin-bottom: 15px;">
        <label for="associateCost" style="display: block; font-weight: bold; margin-bottom: 5px;">Cost per Associate in dollars (per hour):</label>
        <input type="number" id="associateCost" placeholder="Enter cost per associate" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
      </div>
  
      <div style="margin-bottom: 15px;">
        <label for="smeCount" style="display: block; font-weight: bold; margin-bottom: 5px;">Number of SMEs:</label>
        <input type="number" id="smeCount" placeholder="Enter number of SMEs" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
      </div>
  
      <div style="margin-bottom: 15px;">
        <label for="smeCost" style="display: block; font-weight: bold; margin-bottom: 5px;">Cost per SME in dollars (per hour):</label>
        <input type="number" id="smeCost" placeholder="Enter cost per SME" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
      </div>
  
      <div style="margin-bottom: 15px;">
        <label for="time" style="display: block; font-weight: bold; margin-bottom: 5px;">Time (in hours):</label>
        <input type="number" id="time" placeholder="Enter time in hours" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
      </div>
  
      <button onclick="calculateTotalCost()" style="width: 100%; padding: 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; font-size: 16px; cursor: pointer;">Calculate Total Cost</button>
      <div id="result" style="margin-top: 20px; font-weight: bold; text-align: center; color: #333;"></div>
    </div>
  `;
  