var exercise = {
    init: function() {
        var tab = window.location.hash.slice(1) || "option1";
        if(!window.location.hash){
            window.location.hash = "#" + tab;
        }
        this.getTabContent(tab);
    },
    getTabContent: function(tab) {
        if(!localStorage.getItem(tab)){
            $.get("tabContent.json", function(data) {
                var content = data[tab].content;
                localStorage.setItem(tab, content);
                exercise.setTabContent(tab, content);
            }); 
        } else {
            this.setTabContent(tab, localStorage.getItem(tab));
        }
    },
    setTabContent: function(tab, data) {
        document.getElementById(tab).innerHTML = data;
    }
};

exercise.init();
