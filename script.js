// Function to toggle the visibility of subcategories
function toggleSubcategory(subcategory) {
    var element = document.getElementById(subcategory);
    element.style.display = element.style.display === "none" ? "block" : "none";
  }


 // Function to navigate to the main page
 function goToMainPage() {
    window.location.href = "index.html";
}



// Function to load content for the selected page
function openPage(page) {
  // Define the subcategory page URLs
  var pageUrls = {
    mapy: "subcategories/mapy.html",
    dungeony: "subcategories/dungeony.html",
    zbrane: "subcategories/zbrane.html",
    brneni: "subcategories/brneni.html",
    sperky: "subcategories/sperky.html",
    pasivniSchopnosti: "subcategories/pasivni-schopnosti.html",
    jezdectvi: "subcategories/jezdectvi.html",
    pet: "subcategories/pet.html",
    kameny: "subcategories/kameny.html",
    spotrebniDoplneky: "subcategories/spotrebni-doplneky.html",
    serpy: "subcategories/serpy.html",
    rukavice: "subcategories/rukavice.html",
    tezba: "subcategories/tezba.html",
    rybareni: "subcategories/rybareni.html",
    biolog: "subcategories/biolog.html",
    vyzvy: "subcategories/vyzvy.html",
    bonusy: "subcategories/bonusy.html",
    slechteni: "subcategories/slechteni.html"
    // Add more subcategory URLs as needed
  };

  // Check if the selected page is a subcategory
  if (page in pageUrls) {
    // Redirect to the corresponding subcategory page
    window.location.href = pageUrls[page];
  } else {
    // For other pages, you can handle the redirection accordingly
    // For simplicity, let's set a default redirection to the home page
    window.location.href = "index.html";
  }
}