(function () {
    function getData(index, count, func) {
        return $.get("/data?index=" + index + "&count=" + count, function (data) {
            func && func(data);
        });
    }

    function initTable(vueObj) {
        $.when($.get("/data-count"), getData(1, vueObj.showCount)).done(function (count, data) {
            var count = parseInt(arguments[0][0]);
            var data = arguments[1][0];
            vueObj.users = data;
            vueObj.nowIndex = 1;
            vueObj.count = count;
            vueObj.pageCount = count % vueObj.showCount == 0 ? count / vueObj.showCount : parseInt(count / vueObj.showCount) + 1;
        });
    }

    new Vue({
        el:"#container",
        data:{"users":1, //用户数据
            "nowIndex":1, //现在显示第几页
            "count":0, //总共有多少条数据
            "pageCount":0, //总共有多少页
            "showCount":10//每次显示多少条数据
        },
        created:function () {
            var that = this;
            initTable(that);
        },
        methods:{
            skip:function (num) {
                var that = this;
                getData(num, that.showCount, function (data) {
                    that.users = data;
                    that.nowIndex = num;
                });
            },
            previous:function (event) {
                if (this.nowIndex == 1) return false;
                var that = this;
                getData(--that.nowIndex, that.showCount, function (data) {
                    that.users = data;
                });
            },
            next:function (event) {
                if (this.nowIndex == this.pageCount) return false;
                var that = this;
                getData(++that.nowIndex, that.showCount, function (data) {
                    that.users = data;
                });
            },
            showCountChange:function (val) {
                var that = this;
                initTable(that);
            }
        }
    });
})();

