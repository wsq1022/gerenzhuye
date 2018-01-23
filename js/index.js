$(".box").fullpage({
    anchors: ["p1", "p2", "p3", "p4", "p5"],
    scrollingSpeed: 1000,
    navigation: true,
    navigationTooltips: ["欢迎", "个人资料", "专业技能", "作品展示", "请联系我"],
    navigationColor: ["red", "yellow"],
    fixedElements: "#menu",
    menu: "#menu",
    slidesNavigation: true
})
