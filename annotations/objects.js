var profile = {
    name: "Jack",
    age: 25,
    coordinates: {
        lat: 1,
        lng: 20
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coordinates, lat = _a.lat, lng = _a.lng;
