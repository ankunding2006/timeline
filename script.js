document.addEventListener("DOMContentLoaded", () => {
    const eventsData = [
        // 第一阶段：局部抗战 (1931 - 1937)
        {
            date: "1931-09-18",
            title: "九一八事变",
            description:
                "日本关东军自行炸毁沈阳柳条湖附近的一段南满铁路，并以此为借口，诬陷是中国军队所为，随即炮轰东北军驻地北大营，攻占沈阳。由于东北军主力执行“不抵抗政策”，日军在短短数月内迅速占领了中国东北三省。此事变被视为日本全面侵华的开端，也标志着中国人民局部抗战的开始。",
        },
        {
            date: "1932-01-28",
            title: "一·二八事变",
            description:
                "日军在上海挑起战端，向中国驻军第十九路军发起攻击。第十九路军在总指挥蒋光鼐、军长蔡廷锴的带领下奋起抵抗，给了日军沉重打击。这场战役展示了中国军队的抵抗意志，但最终以《淞沪停战协定》的签订告终，上海被划为“非武装区”。",
        },
        {
            date: "1932-03-01",
            title: "伪满洲国成立",
            description:
                "在日本的策划下，清朝末代皇帝溥仪在长春（后改名“新京”）就任“执政”，成立了听命于日本的傀儡政权——“满洲国”。这标志着东北地区完全沦为日本的殖民地。",
        },
        {
            date: "1936-12-12",
            title: "西安事变",
            description:
                "为了逼迫蒋介石停止“剿共”、联共抗日，时任西北剿匪副总司令的张学良和第十七路军总指挥的杨虎城在西安发动“兵谏”，扣留了蒋介石。经过多方斡旋，事变最终和平解决。西安事变的和平解决成为扭转时局的关键，它结束了长达十年的国共内战，促成了第二次国共合作和抗日民族统一战线的初步形成。",
        },
        // 第二阶段：全面抗战 (1937 - 1941)
        {
            date: "1937-07-07",
            title: "七七事变 / 卢沟桥事变",
            description:
                "日军在北平（今北京）西南的卢沟桥附近以士兵失踪为借口，要求进入宛平城搜查，遭到中国守军第二十九军的拒绝后，悍然向中国军队发动攻击。这标志着中华民族全面抗日战争的开始。",
        },
        {
            date: "1937-08-13",
            title: "淞沪会战",
            description:
                "这是抗日战争中规模最大、战斗最惨烈的一场战役。中日双方投入近百万兵力在上海及周边地区展开了长达三个月的激战。虽然中国军队最终被迫撤退，上海沦陷，但此役粉碎了日军“三个月灭亡中国”的狂妄计划，极大地激发了全国人民的抗日热情。",
        },
        {
            date: "1937-12-13",
            title: "南京大屠杀",
            description:
                "日军攻占当时的中国首都南京后，在长达六周的时间里，对南京手无寸铁的平民和放下武器的士兵进行了惨绝人寰的大规模屠杀、抢掠和奸淫。超过30万同胞在这场浩劫中遇难，是人类历史上最黑暗的一页。",
        },
        {
            date: "1938-03-16",
            title: "台儿庄战役",
            description:
                "在第五战区司令长官李宗仁的指挥下，中国军队在山东台儿庄重创日军精锐部队，歼敌万余人。这是抗战爆发后中国军队在正面战场上取得的首次重大胜利，极大地鼓舞了全国军民的士气。",
        },
        {
            date: "1938-06-11", // 武汉会战时间跨度较长，取一个近似中间点
            title: "武汉会战",
            description:
                "这是抗战史上规模最大的战役之一，中国军队以近百万兵力抗击日军约35万人的进攻，保卫华中重镇武汉。虽然武汉最终失守，但会战历时四个半月，大量消耗了日军的有生力量，使得日军速战速决的战略彻底破产。此后，抗日战争进入了战略相持阶段。",
        },
        {
            date: "1940-03-30",
            title: "汪精卫伪国民政府成立",
            description:
                "国民党副总裁汪精卫公开投降日本，并在南京成立了另一个听命于日本的傀儡政权——“中华民国国民政府”。这一叛国行为遭到全国人民的唾弃。",
        },
        {
            date: "1940-08-20", // 百团大战时间跨度较长，取一个近似中间点
            title: "百团大战",
            description:
                "由彭德怀指挥的八路军在华北敌后战场发动了一场大规模的进攻战役。八路军参战部队达到105个团，故称“百团大战”。战役主要目标是破坏日军的交通线和摧毁其据点，有力地打击了日军的“囚笼政策”，振奋了全国军民的抗战信心。",
        },
        // 第三阶段：与世界反法西斯战争合流 (1941 - 1945)
        {
            date: "1941-01-06", // 皖南事变时间跨度较长，取一个近似中间点
            title: "皖南事变",
            description:
                "国民党军队在安徽泾县茂林地区包围并袭击了奉命北移的新四军军部及直属部队，造成新四军重大损失，军长叶挺被俘，副军长项英遇害。这是抗日民族统一战线中的一次严重倒退事件。",
        },
        {
            date: "1941-12-07",
            title: "珍珠港事件",
            description:
                "日本偷袭美国海军基地珍珠港，太平洋战争全面爆发。次日，美国对日宣战。12月9日，中国国民政府正式对日、德、意宣战，中国的抗日战争与世界反法西斯战争彻底融为一体。",
        },
        {
            date: "1942-03-01",
            title: "中国远征军入缅作战",
            description:
                "为支援英军在缅甸的作战，并保卫中国西南的国际交通线——滇缅公路，国民政府组建中国远征军进入缅甸，与日军作战。这是甲午战争以来中国军队首次出国作战，为世界反法西斯战争作出了重要贡献。",
        },
        {
            date: "1943-11-22",
            title: "开罗会议",
            description:
                "中、美、英三国首脑蒋介石、罗斯福、丘吉尔在埃及开罗举行会议。会后发表的《开罗宣言》明确规定，日本所窃取于中国的领土，例如东北四省、台湾、澎湖群岛等，归还中华民国。这为战后中国收复失地提供了重要的法理依据。",
        },
        {
            date: "1945-01-01",
            title: "反攻准备",
            description:
                "日军在1944年发动的“一号作战”（豫湘桂会战）虽然占领了大片领土，但也已是强弩之末。进入1945年，中国军队在同盟国的支持下，开始在多个战场进行局部反攻。",
        },
        {
            date: "1945-08-06",
            title: "原子弹轰炸与苏联宣战",
            description:
                "美国分别在日本广岛和长崎投下原子弹，造成巨大伤亡。8月8日，苏联对日宣战，并于次日出兵中国东北，迅速击溃了日本关东军。这两起事件彻底摧毁了日本继续战争的意志。",
        },
        {
            date: "1945-08-15",
            title: "日本无条件投降",
            description:
                "日本裕仁天皇通过广播发表《终战诏书》，宣布接受《波茨坦公告》，无条件投降。",
        },
        {
            date: "1945-09-09",
            title: "中国战区受降仪式",
            description:
                "中国战区的日本投降签字仪式在南京举行。日本中国派遣军总司令官冈村宁次在投降书上签字。至此，历时十四年的中国人民抗日战争，以中华民族的伟大胜利而告终。",
        },
    ];

    const timelineEventsContainer = document.getElementById("timelineEvents");
    const timelineTrack = document.getElementById("timelineTrack");
    const timelineWrapper = document.querySelector(".timeline-wrapper");
    const yearRuler = document.getElementById("yearRuler");

    const eventDetail = document.getElementById("eventDetail");
    const eventTitle = document.getElementById("eventTitle");
    const eventDate = document.getElementById("eventDate");
    const eventDescription = document.getElementById("eventDescription");
    const closeDetailBtn = document.getElementById("closeDetail");

    const zoomInBtn = document.getElementById("zoomIn");
    const zoomOutBtn = document.getElementById("zoomOut");
    const resetViewBtn = document.getElementById("resetView");

    const startDate = new Date("1931-09-18");
    const endDate = new Date("1945-09-09");
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

    let currentZoom = 1;
    const minZoom = 0.5;
    const maxZoom = 5;
    const initialTrackWidth = 3000;

    function initializeTimeline() {
        timelineTrack.style.width = `${initialTrackWidth}px`;

        eventsData.forEach((event, index) => {
            const eventDateObj = new Date(event.date);
            const daysFromStart =
                (eventDateObj - startDate) / (1000 * 60 * 60 * 24);
            const position = (daysFromStart / totalDays) * 100;

            const eventNode = document.createElement("div");
            eventNode.className = "event-node";
            eventNode.style.left = `${position}%`;
            eventNode.dataset.index = index;

            const eventLabel = document.createElement("div");
            eventLabel.className = "event-label";
            eventLabel.textContent = event.title;
            eventNode.appendChild(eventLabel);

            timelineEventsContainer.appendChild(eventNode);

            eventNode.addEventListener("click", () => {
                showEventDetails(index);
                setActiveNode(eventNode);
            });
        });

        generateYearRuler();
        setupDragging();
        // 同步滚动
        timelineWrapper.addEventListener("scroll", () => {
            yearRuler.scrollLeft = timelineWrapper.scrollLeft;
        });
    }

    function showEventDetails(index) {
        const event = eventsData[index];
        eventTitle.textContent = event.title;
        eventDate.textContent = `时间：${event.date}`;
        eventDescription.innerHTML = `<p>${event.description}</p>`;
        eventDetail.classList.add("show");
    }

    function setActiveNode(activeNode) {
        document.querySelectorAll(".event-node").forEach((node) => {
            node.classList.remove("active");
        });
        activeNode.classList.add("active");
    }

    closeDetailBtn.addEventListener("click", () => {
        eventDetail.classList.remove("show");
        document.querySelectorAll(".event-node").forEach((node) => {
            node.classList.remove("active");
        });
    });

    function generateYearRuler() {
        const rulerContent = document.createElement("div");
        rulerContent.style.width = timelineTrack.style.width;
        rulerContent.style.position = "relative";
        rulerContent.style.height = "100%";

        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();

        for (let year = startYear; year <= endYear; year++) {
            const yearDate = new Date(`${year}-01-01`);
            const daysFromStart =
                (yearDate - startDate) / (1000 * 60 * 60 * 24);
            const position = (daysFromStart / totalDays) * 100;

            if (position >= 0 && position <= 100) {
                const yearMark = document.createElement("div");
                yearMark.className = "year-mark";
                yearMark.textContent = year;
                yearMark.style.left = `${position}%`;
                rulerContent.appendChild(yearMark);
            }
        }
        yearRuler.appendChild(rulerContent);
    }

    function setupDragging() {
        let isDragging = false;
        let startX;
        let scrollLeft;

        timelineWrapper.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.pageX - timelineWrapper.offsetLeft;
            scrollLeft = timelineWrapper.scrollLeft;
            timelineWrapper.style.cursor = "grabbing";
        });

        timelineWrapper.addEventListener("mouseleave", () => {
            isDragging = false;
            timelineWrapper.style.cursor = "grab";
        });

        timelineWrapper.addEventListener("mouseup", () => {
            isDragging = false;
            timelineWrapper.style.cursor = "grab";
        });

        timelineWrapper.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - timelineWrapper.offsetLeft;
            const walk = (x - startX) * 2; // 拖动速度
            timelineWrapper.scrollLeft = scrollLeft - walk;
        });
    }

    function zoom(factor) {
        const newZoom = Math.max(
            minZoom,
            Math.min(maxZoom, currentZoom * factor)
        );
        if (newZoom === currentZoom) return;

        const scrollRatio =
            timelineWrapper.scrollLeft / timelineTrack.offsetWidth;

        currentZoom = newZoom;
        const newWidth = initialTrackWidth * currentZoom;
        timelineTrack.style.width = `${newWidth}px`;
        yearRuler.firstElementChild.style.width = `${newWidth}px`;

        const newScrollLeft = scrollRatio * timelineTrack.offsetWidth;
        timelineWrapper.scrollLeft = newScrollLeft;
    }

    zoomInBtn.addEventListener("click", () => zoom(1.2));
    zoomOutBtn.addEventListener("click", () => zoom(0.8));
    resetViewBtn.addEventListener("click", () => {
        currentZoom = 1;
        const newWidth = initialTrackWidth;
        timelineTrack.style.width = `${newWidth}px`;
        yearRuler.firstElementChild.style.width = `${newWidth}px`;
        timelineWrapper.scrollLeft = 0;
    });

    initializeTimeline();
});
