var user_data = {
    data:[
        {"name":"贸云蔚", "age":81, "sex":1, "zipCode":"100023"},
        {"name":"剑平凡", "age":37, "sex":0, "zipCode":"100024"},
        {"name":"悉昊昊", "age":82, "sex":1, "zipCode":"100025"},
        {"name":"示梦桐", "age":38, "sex":1, "zipCode":"100026"},
        {"name":"苗岚翠", "age":45, "sex":1, "zipCode":"100027"},
        {"name":"针兰梦", "age":15, "sex":0, "zipCode":"100028"},
        {"name":"糜元旋", "age":81, "sex":1, "zipCode":"100029"},
        {"name":"迮怀慕", "age":59, "sex":1, "zipCode":"100030"},
        {"name":"沙韵诗", "age":59, "sex":0, "zipCode":"100031"},
        {"name":"公叔听安", "age":54, "sex":0, "zipCode":"100032"},
        {"name":"邗千雁", "age":96, "sex":0, "zipCode":"100033"},
        {"name":"沐惜玉", "age":86, "sex":0, "zipCode":"100034"},
        {"name":"邢华晖", "age":35, "sex":0, "zipCode":"100035"},
        {"name":"甘情韵", "age":7, "sex":0, "zipCode":"100036"},
        {"name":"丁北辰", "age":77, "sex":0, "zipCode":"100037"},
        {"name":"洛水蓉", "age":96, "sex":0, "zipCode":"100038"},
        {"name":"贸云蔚", "age":81, "sex":1, "zipCode":"100039"},
        {"name":"枝思琪", "age":30, "sex":1, "zipCode":"100040"},
        {"name":"悉昊昊", "age":16, "sex":0, "zipCode":"100041"},
        {"name":"羿承泽", "age":23, "sex":0, "zipCode":"100042"},
        {"name":"官芊丽", "age":15, "sex":1, "zipCode":"100043"},
        {"name":"针兰梦", "age":51, "sex":0, "zipCode":"100044"},
        {"name":"尚经略", "age":82, "sex":0, "zipCode":"100045"},
        {"name":"迮怀慕", "age":101, "sex":1, "zipCode":"100046"},
        {"name":"沙韵诗", "age":100, "sex":1, "zipCode":"100047"},
        {"name":"闻人婷秀", "age":64, "sex":0, "zipCode":"100048"},
        {"name":"澹台夜雪", "age":103, "sex":1, "zipCode":"100049"},
        {"name":"沐惜玉", "age":60, "sex":1, "zipCode":"100050"},
        {"name":"邢华晖", "age":74, "sex":1, "zipCode":"100051"},
        {"name":"王雅志", "age":8, "sex":0, "zipCode":"100052"},
        {"name":"丁北辰", "age":28, "sex":0, "zipCode":"100053"},
        {"name":"缑秋芳", "age":55, "sex":1, "zipCode":"100054"},
        {"name":"贸云蔚", "age":9, "sex":0, "zipCode":"100055"},
        {"name":"剑平凡", "age":24, "sex":1, "zipCode":"100056"},
        {"name":"甫秋寒", "age":24, "sex":1, "zipCode":"100057"},
        {"name":"万妍歌", "age":88, "sex":1, "zipCode":"100058"},
        {"name":"墨宾白", "age":42, "sex":0, "zipCode":"100059"},
        {"name":"针兰梦", "age":64, "sex":0, "zipCode":"100060"},
        {"name":"夔翰翮", "age":48, "sex":1, "zipCode":"100061"},
        {"name":"迮怀慕", "age":23, "sex":1, "zipCode":"100062"},
        {"name":"孟景明", "age":74, "sex":1, "zipCode":"100063"},
        {"name":"谭含莲", "age":35, "sex":0, "zipCode":"100064"},
        {"name":"邗千雁", "age":96, "sex":1, "zipCode":"100065"},
        {"name":"濯诗兰", "age":90, "sex":1, "zipCode":"100066"},
        {"name":"费莫宏达", "age":57, "sex":0, "zipCode":"100067"},
        {"name":"赏依云", "age":19, "sex":0, "zipCode":"100068"},
        {"name":"友清馨", "age":81, "sex":0, "zipCode":"100069"},
        {"name":"抄月朗", "age":35, "sex":1, "zipCode":"100070"}
    ],
    getData:function (index, count) {
        var len = this.data.length;
        var max = len % count == 0 ? len / count : parseInt(len / count + 1);

        if (index <= 0 || index > max) {
            return null;
        } else {
            var a = (index - 1) * count;
            var b = (index) * count;
            var res = [];
            for (var i = a; i < b && i < this.data.length; i++) {
                res.push(this.data[i]);
            }
            return res;
        }
    },
    getAll:function () {
        return this.data;
    },
//    test:function () {
//        for (var i = 0; i < this.data.length; i++) {
//            this.data[i].age = parseInt(Math.random() * 100) + 5;
//            this.data[i].sex = Math.random() > 0.5 ? 1 : 0;
//            this.data[i].zipCode = 100023 + i + "";
//        }
//        return this.data;
//    },
    count:function () {
        return this.data.length;
    }
};

module.exports = user_data;