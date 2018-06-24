class Library {
    exists = (variable) => {
        return variable !== undefined && variable !== null;
    }

    newGuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    formatTime(date, includeSeconds) {
        var dd = date.getDate();
        var MM = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        var tt = 'AM';
        ss = (ss < 10) ? '0' + ss : ss;
        mm = (mm < 10) ? '0' + mm : mm;
        if (hh > 12) {
            hh -= 12;
            tt = 'PM';
        }
        var result = (includeSeconds) ? 
            MM + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mm + ':' + ss + ' ' + tt : 
            MM + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mm + ' ' + tt;
        return result;
    }

    isEmptyString(val){
        return val === '';
    }

    areAllStringsWithValues(vals){
        return !vals.some( val => this.isEmptyString(val));
    }
}

const lib = new Library();
export default lib;