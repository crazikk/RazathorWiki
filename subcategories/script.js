// Function to toggle the visibility of subcategories
function toggleSubcategory(subcategory) {
    var element = document.getElementById(subcategory);
    element.style.display = element.style.display === "none" ? "block" : "none";
  }


 // Function to navigate to the main page
 function goToMainPage() {
    window.location.href = "../index.html";
}



// Function to load content for the selected page
function openPage(page) {
  // Define the subcategory page URLs
  var pageUrls = {
    mapy: "mapy.html",
    dungeony: "dungeony.html",
    zbrane: "zbrane.html",
    brneni: "brneni.html",
    sperky: "sperky.html",
    faq:    "faq.html",
    tipy:    "tipy.html",
    pasivniSchopnosti: "pasivni-schopnosti.html",
    jezdectvi: "jezdectvi.html",
    pet: "pet.html",
    kameny: "kameny.html",
    spotrebniDoplneky: "spotrebni-doplneky.html",
    serpy: "serpy.html",
    rukavice: "rukavice.html",
    tezba: "tezba.html",
    rybareni: "rybareni.html",
    biolog: "biolog.html",
    vyzvy: "vyzvy.html",
    bonusy: "bonusy.html",
    slechteni: "slechteni.html"
    // Add more subcategory URLs as needed
  };

  // Check if the selected page is a subcategory
  if (page in pageUrls) {
    // Redirect to the corresponding subcategory page
    window.location.href = pageUrls[page];
  } else {
    // For other pages, you can handle the redirection accordingly
    // For simplicity, let's set a default redirection to the home page
    window.location.href = "../index.html";
  }
}