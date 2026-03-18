var imgArray = [
    { img_url: "img/13.jpg", title: "High School Graduation", people: "Praveen, Dr. Trause, Ashvin", date: "6/22/18" },
    { img_url: "img/16.jpg", title: "Brothers", people: "Praveen, Ashvin", date: "5/21/2016" },
    { img_url: "img/18.jpg", title: "Matching", people: "Dad, Ashvin, Praveen", date: "1/8/2017" },
    { img_url: "img/20.jpg", title: "Blue", people: "Ashvin, Mom, Praveen", date: "7/19/2017" },
    { img_url: "img/24.jpg", title: "Golden Gate Bridge", people: "Ashvin, Praveen", date: "7/25/2017" },
    { img_url: "img/25.jpg", title: "Typical Tourist", people: "Ashvin", date: "7/25/2017" },
    { img_url: "img/27.jpg", title: "Flannel Friends", people: "Jordan, Vincent, Ashvin", date: "7/14/2017" },
    { img_url: "img/29.jpg", title: "Student Council Board", people: "Ashvin, Charlee, Ben, Jess", date: "1/5/2018" },
    { img_url: "img/30.jpg", title: "Rebound", people: "Ashvin, Paul, Cameron", date: "2/24/2018" },
    { img_url: "img/31.jpg", title: "JCHS Varsity Tennis Team", people: "Tennis Team", date: "4/26/2018" },
    { img_url: "img/32.jpg", title: "Habitat for Humanity", people: "H4H Board", date: "4/28/2018" },
    { img_url: "img/33.jpg", title: "JCHS Chemistry Olympics", people: "Chem Olympics Team", date: "4/19/2018" },
    { img_url: "img/34.jpg", title: "JCHS Math Bowl", people: "Math Team", date: "April 2018" },
    { img_url: "img/35.jpg", title: "JCHS Math Bowl", people: "Math Team", date: "April 2018" },
    { img_url: "img/37.jpg", title: "Academic Banquet", people: "Jordan, Josh, Ashvin", date: "5/23/2018" },
    { img_url: "img/38.jpg", title: "High School Graduation", people: "Vincent, Ashvin", date: "6/22/2018" },
    { img_url: "img/39.jpg", title: "Academic Banquet", people: "Friends", date: "5/23/2018" },
    { img_url: "img/43.jpg", title: "Latin Honor Society Induction", people: "Ashvin, Dr. Trause", date: "4/10/2018" },
    { img_url: "img/50.jpg", title: "2018 NJ Chemistry Olympics", people: "Spencer, Cole, Ashvin", date: "4/19/2018" },
    { img_url: "img/52.jpg", title: "High School Graduation", people: "Dr. Trause, Ashvin", date: "6/22/2018" },
    { img_url: "img/53.jpg", title: "Senior Year", people: "Jordan, Ashvin", date: "2/1/2018" },
    { img_url: "img/57.jpg", title: "Senior Photo Day", people: "Jordan, Ashvin", date: "10/14/2017" },
    { img_url: "img/58.jpg", title: "JCHS Varsity Tennis", people: "Ashvin", date: "4/26/2018" },
    { img_url: "img/59.jpg", title: "JCHS Varsity Tennis", people: "Ashvin", date: "4/26/2018" },
    { img_url: "img/62.jpg", title: "JCHS Graduation Ceremony", people: "JCHS Class of 2018", date: "6/22/2018" },
    { img_url: "img/1.png", title: "Eagle Court of Honor", people: "Dad, Ashvin, Mom", date: "12/20/2018" },
    { img_url: "img/3.png", title: "Eagle Court of Honor", people: "Ashvin", date: "12/20/2018" },
    { img_url: "img/5.png", title: "JCHS Orchestra", people: "Orchestra", date: "1/24/2018" },
    { img_url: "img/64.jpg", title: "Bruin Racing Christmas", people: "Bruin Racing Team", date: "12/10/2018" },
    { img_url: "img/65.jpg", title: "Composite Layup", people: "Bruin Racing Team", date: "10/09/2018" },
    { img_url: "img/66.jpg", title: "IdeaHacks 2019", people: "Ashvin, Matt, Jeff, Allison, Juan", date: "1/24/2019" },
    { img_url: "img/67.jpg", title: "SWE Banquet", people: "Ashvin, Annie, Allison, Juan, Matt", date: "5/4/2019" },
    { img_url: "img/68.jpg", title: "San Francisco", people: "Parth, Ashvin, Param", date: "3/20/2019" },
    { img_url: "img/69.jpg", title: "The Bruin Experiment", people: "Ashvin", date: "4/20/2019" },
    { img_url: "img/71.jpg", title: "Booz Allen Hamilton", people: "Championship Team", date: "8/23/2019" },
    { img_url: "img/72.jpg", title: "Booz Allen Volunteering", people: "Interns", date: "7/24/2019" },
    { img_url: "img/73.jpg", title: "Washington DC Spy Museum", people: "Championship Team", date: "8/24/2019" },
];

var remaining = imgArray.slice();
var batchSize = 8;
var galleryGrid = document.getElementById('gallery-grid');
var loadMoreBtn = document.getElementById('load-more-pics');

function createGalleryItem(img) {
    return '<a class="gallery-item" href="' + img.img_url + '" target="_blank">' +
        '<img src="' + img.img_url + '" alt="' + img.title + '" loading="lazy">' +
        '<div class="gallery-item__overlay">' +
            '<span class="gallery-item__title">' + img.title + '</span>' +
            '<span class="gallery-item__people">' + img.people + '</span>' +
        '</div>' +
    '</a>';
}

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function loadBatch() {
    shuffleArray(remaining);
    var count = Math.min(batchSize, remaining.length);
    var batch = remaining.splice(0, count);

    for (var i = 0; i < batch.length; i++) {
        galleryGrid.insertAdjacentHTML('beforeend', createGalleryItem(batch[i]));
    }

    if (remaining.length === 0) {
        loadMoreBtn.textContent = 'No More Pictures';
        loadMoreBtn.disabled = true;
    }
}

// Initial load
loadBatch();

loadMoreBtn.addEventListener('click', function() {
    loadBatch();
});
