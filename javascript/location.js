locationFinder = (location, time) => {
    return new Promise((locFound, locNotFound) => {
        if (isLocationValid(location, time)) {
            locFound(location, "Found in", time, "secs");
        } else {
            locNotFound(location, "Not Found in", time, "secs");
        }
    });
};

function isLocationValid(loc, time) {
    location = "Melbourne";
    t = 2000;
    if (loc === "Melbourne" && time <= t) {
        return true;
    } else {
        return false;
    }
}

locationFinder("Melboune", 2000).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});