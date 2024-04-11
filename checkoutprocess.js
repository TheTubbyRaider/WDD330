try {
  ExternalServices.checkout();
} catch (error) {
  console.log("Error checking out: " + error.message);
}
