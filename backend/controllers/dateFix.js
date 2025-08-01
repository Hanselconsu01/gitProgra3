// backend/controllers/dateFix.js
function formatDate(date) {
    const d = new Date(date);
    return d.toISOString().split('T')[0]; // formato yyyy-mm-dd
  }
  
  module.exports = { formatDate };
  