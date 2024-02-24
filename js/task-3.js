'use strict';

const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName;
        console.log(newName);
    },
    
    updatePlayTime(hours) {
        this.playTime += hours;
        console.log(hours);
    },

    getInfo() {
        return `${this.username} hes ${this.playTime} active hours!`;
    },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
