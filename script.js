// 作品数据 - 这里使用相对路径指向本地文件
// 请根据您的实际文件路径修改这些URL
const works = [
    {
        id: 1,
        title: "AK47",
        description: "一把写实风格的AK47突击步枪",
        category: "image",
        // 修改为您的本地图片路径
        url: "assets/images/AK47.png",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 2,
        title: "笔记本电脑",
        description: "一台简约风格的笔记本电脑",
        category: "video",
        // 修改为您的本地视频路径
        url: "assets/videos/笔记本.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 3,
        title: "iphone",
        description: "一台iphone手机",
        category: "image",
        // 修改为您的本地图片路径
        url: "assets/images/iphone.png",
        tags: ["教程"],
        date: "2025年6月"
    },
    {
        id: 4,
        title: "安全摄像头",
        description: "一个安装在墙上的安全摄像头",
        category: "image",
        // 修改为您的本地图片路径
        url: "assets/images/安全摄像头.png",
        tags: ["教程"],
        date: "2025年6月"
    },
    {
        id: 5,
        title: "地铁花海",
        description: "唯美梦幻风格的地铁花海场景",
        category: "video",
        // 修改为您的本地视频路径
        url: "assets/videos/地铁花海0001-0250.mp4",
        tags: ["教程"],
        date: "2025年3月"
    },
    {
        id: 6,
        title: "宝箱",
        description: "一个卡通风格的华丽宝箱",
        category: "image",
        // 修改为您的本地图片路径
        url: "assets/images/宝箱.png",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 7,
        title: "匕首",
        description: "一把写实风格的匕首",
        category: "image",
        // 修改为您的本地图片路径
        url: "assets/images/匕首.png",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 8,
        title: "飞雷之弦振",
        description: "一把酷炫的弓箭",
        category: "video",
        // 修改为您的本地视频路径
        url: "assets/videos/飞雷0001-0180.mp4",
        tags: ["原创"],
        date: "2025年12月"
    },
    {
        id: 9,
        title: "春花小桥",
        description: "唯美风格卡通春日场景",
        category: "image",
        url: "assets/images/春花小桥.png",
        tags: ["教程"],
        date: "2025年7月"
    },
    {
        id: 10,
        title: "电风扇",
        description: "一个普通的电风扇",
        category: "image",
        url: "assets/images/电风扇.png",
        tags: ["原创"],
        date: "2025年3月"
    },
    {
        id: 11,
        title: "卡通小女孩",
        description: "一个卡通风格的小女孩",
        category: "video",
        url: "assets/videos/卡通小人低分辨率0001-0200.mp4",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 12,
        title: "科幻立方体",
        description: "酷炫的科幻立方体动态效果",
        category: "video",
        url: "assets/videos/科幻立方0001-0120.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 13,
        title: "科幻消失",
        description: "酷炫的物体消失效果",
        category: "video",
        url: "assets/videos/科幻消失0001-0080.mp4",
        tags: ["教程"],
        date: "2025年4月"
    },
    {
        id: 14,
        title: "湖心亭",
        description: "一个普通的湖中小亭场景",
        category: "video",
        url: "assets/videos/湖心亭0001-0250.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 15,
        title: "电竞椅",
        description: "一张普通的电竞椅",
        category: "image",
        url: "assets/images/电竞椅.png",
        tags: ["原创"],
        date: "2025年12月"
    },
    {
        id: 16,
        title: "可乐",
        description: "水流环绕的可乐罐效果图",
        category: "image",
        url: "assets/images/罐装可乐.png",
        tags: ["教程"],
        date: "2025年4月"
    },
    {
        id: 17,
        title: "机甲",
        description: "一台酷炫的拼装机甲",
        category: "image",
        url: "assets/images/机甲.png",
        tags: ["原创"],
        date: "2025年6月"
    },
    {
        id: 18,
        title: "积木组合",
        description: "简单的积木搭建动画",
        category: "video",
        url: "assets/videos/积木组合0001-0200.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 19,
        title: "可爱机器人",
        description: "一个会表情变化的可爱机器人",
        category: "video",
        url: "assets/videos/可爱机器人0001-0170.mp4",
        tags: ["原创"],
        date: "2025年12月"
    },
    {
        id: 20,
        title: "狂奔小车",
        description: "一辆向前狂奔的卡通小汽车",
        category: "video",
        url: "assets/videos/狂奔小车0001-0240.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 21,
        title: "金币基站",
        description: "一台普通的金币烘烤机",
        category: "image",
        url: "assets/images/金币基站.png",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 22,
        title: "项链",
        description: "一条普通的项链",
        category: "image",
        url: "assets/images/金项链.png",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 23,
        title: "橘子",
        description: "一碗看起来十分美味的橘子",
        category: "image",
        url: "assets/images/橘子.png",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 24,
        title: "科幻仓",
        description: "酷炫的太空科幻仓场景",
        category: "image",
        url: "assets/images/科幻仓.png",
        tags: ["教程"],
        date: "2025年5月"
    },
    {
        id: 25,
        title: "蓝牙耳机",
        description: "简单的蓝牙耳机展示动画",
        category: "video",
        url: "assets/videos/蓝牙耳机0001-0250.mp4",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 26,
        title: "流星",
        description: "唯美动漫风格的流星雨动画",
        category: "video",
        url: "assets/videos/流星0001-0250.mp4",
        tags: ["教程"],
        date: "2024年12月"
    },
    {
        id: 27,
        title: "落日海面",
        description: "唯美风格的落日海面动画",
        category: "video",
        url: "assets/videos/落日海面20001-0240.mp4",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 28,
        title: "手机",
        description: "简单的手机旋转动画",
        category: "video",
        url: "assets/videos/手机0001-0250.mp4",
        tags: ["原创"],
        date: "2025年3月"
    },
    {
        id: 29,
        title: "手枪",
        description: "简单的手枪动画",
        category: "video",
        url: "assets/videos/手枪0001-0200.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 30,
        title: "鼠标",
        description: "酷炫的鼠标展示动画",
        category: "video",
        url: "assets/videos/鼠标0001-0750.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 31,
        title: "脉动",
        description: "清爽的脉动效果图",
        category: "image",
        url: "assets/images/脉动图.png",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 32,
        title: "萌三兄弟",
        description: "入门可爱几何体",
        category: "image",
        url: "assets/images/萌三兄弟.png",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 33,
        title: "盆栽",
        description: "三渲二风格小盆栽",
        category: "image",
        url: "assets/images/三渲二盆栽.png",
        tags: ["教程"],
        date: "2025年5月"
    },
    {
        id: 34,
        title: "手机",
        description: "简单的手机背面效果图",
        category: "image",
        url: "assets/images/手机蓝.png",
        tags: ["原创"],
        date: "2025年6月"
    },
    {
        id: 35,
        title: "坦克",
        description: "一俩酷炫的坦克",
        category: "image",
        url: "assets/images/坦克.png",
        tags: ["原创"],
        date: "2025年7月"
    },
    {
        id: 36,
        title: "四六级耳机",
        description: "简单的耳机旋转动画",
        category: "video",
        url: "assets/videos/四六级耳机0001-0360.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 37,
        title: "苏珊娜",
        description: "几何节点科幻猴子效果",
        category: "video",
        url: "assets/videos/苏珊娜0001-0200.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 38,
        title: "宿舍",
        description: "简单宿舍场景",
        category: "video",
        url: "assets/videos/宿舍0001-0360.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 39,
        title: "甜甜圈",
        description: "甜甜圈展示动画",
        category: "video",
        url: "assets/videos/甜甜圈0001-0200.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 40,
        title: "无人机",
        description: "简易无人机效果图",
        category: "image",
        url: "assets/images/无人机.png",
        tags: ["原创"],
        date: "2025年7月"
    },
    {
        id: 41,
        title: "相机",
        description: "一台普通的照相机",
        category: "image",
        url: "assets/images/相机.png",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 42,
        title: "香水",
        description: "一瓶奢华的蓝色香水瓶效果",
        category: "image",
        url: "assets/images/香水.png",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 43,
        title: "香水",
        description: "一瓶奢华的香水瓶效果",
        category: "image",
        url: "assets/images/香水瓶调色版.png",
        tags: ["教程"],
        date: "2025年5月"
    },
    {
        id: 44,
        title: "头戴耳机",
        description: "一段简单的头戴耳机展示动画",
        category: "video",
        url: "assets/videos/头戴耳机pro0001-0150.mp4",
        tags: ["原创"],
        date: "2025年12月"
    },
    {
        id: 45,
        title: "头盔",
        description: "一个酷炫的头盔旋转动画",
        category: "video",
        url: "assets/videos/头盔0001-0180.mp4",
        tags: ["教程"],
        date: "2025年12月"
    },
    {
        id: 46,
        title: "小狐狸",
        description: "林中小狐狸入门教程动画",
        category: "video",
        url: "assets/videos/小狐狸重置版0001-0480.mp4",
        tags: ["教程"],
        date: "2024年10月"
    },
    {
        id: 47,
        title: "星空之城",
        description: "星空之城概念动画",
        category: "video",
        url: "assets/videos/星城启幕x.mp4",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 48,
        title: "行星",
        description: "酷炫的行星动画",
        category: "video",
        url: "assets/videos/星球0001-0192.mp4",
        tags: ["教程"],
        date: "2025年6月"
    },
    {
        id: 49,
        title: "烟花",
        description: "烟花炸开效果",
        category: "video",
        url: "assets/videos/烟花20001-0150.mp4",
        tags: ["教程"],
        date: "2025年12月"
    },
    {
        id: 50,
        title: "爱莉的生日蛋糕",
        description: "我永远喜欢爱莉希雅",
        category: "video",
        url: "assets/videos/爱莉的生日蛋糕0001-0940.mp4",
        tags: ["璀璨光芒 照耀大地"],
        date: "11月11日是人家的生日哦🎶"
    },
    {
        id: 51,
        title: "小机器人",
        description: "简单的小机器人",
        category: "image",
        url: "assets/images/小机器人.png",
        tags: ["原创"],
        date: "2025年7月"
    },
    {
        id: 52,
        title: "眼镜",
        description: "一副简单的眼镜",
        category: "image",
        url: "assets/images/眼镜.png",
        tags: ["原创"],
        date: "2025年3月"
    },
    {
        id: 53,
        title: "泳池",
        description: "写实风格的泳池场景",
        category: "image",
        url: "assets/images/泳池.png",
        tags: ["教程"],
        date: "2024年12月"
    },
    {
        id: 54,
        title: "油桶",
        description: "叙利亚战损版油桶",
        category: "image",
        url: "assets/images/油桶.png",
        tags: ["教程"],
        date: "2025年5月"
    },
    {
        id: 55,
        title: "足球",
        description: "一个简单的足球",
        category: "image",
        url: "assets/images/足球.png",
        tags: ["教程"],
        date: "2025年4月"
    },
    {
        id: 56,
        title: "樱花小道",
        description: "唯美风格樱花场景",
        category: "video",
        url: "assets/videos/樱花小道.mp4",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 57,
        title: "游戏手柄",
        description: "简单的游戏手柄展示动画",
        category: "video",
        url: "assets/videos/游戏手柄0001-0180.mp4",
        tags: ["原创"],
        date: "2025年4月"
    },
    {
        id: 58,
        title: "走路机器人",
        description: "简单走路机器人动画",
        category: "video",
        url: "assets/videos/走路机器人0001-0146.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 59,
        title: "子弹冲击",
        description: "简单子弹冲击物理模拟动画",
        category: "video",
        url: "assets/videos/子弹冲击0001-0100.mp4",
        tags: ["教程"],
        date: "2024年11月"
    },
    {
        id: 60,
        title: "战斗机",
        description: "清朝战斗机泄密视频流出",
        category: "video",
        url: "assets/videos/战斗机20001-0510.mp4",
        tags: ["原创"],
        date: "2025年8月"
    },
    {
        id: 61,
        title: "美食",
        description: "你的晚餐",
        category: "image",
        url: "assets/images/一坨s.png",
        tags: ["原创"],
        date: "2025年5月"
    },
    {
        id: 62,
        title: "池核",
        description: "池核恐怖场景",
        category: "video",
        url: "assets/videos/池核重置0001-0250.mp4",
        tags: ["教程"],
        date: "2024年11月"
    }
];

// DOM元素
const worksGrid = document.getElementById('worksGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const loader = document.getElementById('loader');
const emptyState = document.getElementById('emptyState');
const workModal = document.getElementById('workModal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalDate = document.getElementById('modalDate');
const modalTags = document.getElementById('modalTags');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

// 当前选中的分类
let currentCategory = 'all';
// 当前活动的视频元素
let currentActiveVideo = null;

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderWorks('all');
    setupEventListeners();
    
    // 设置导航菜单初始状态
    if (window.innerWidth <= 768) {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'block';
    }
});

// 设置事件监听器
function setupEventListeners() {
    // 分类按钮点击事件
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新按钮状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 更新当前分类
            currentCategory = category;
            
            // 渲染作品
            renderWorks(category);
        });
    });
    
    // 关闭模态框
    closeModal.addEventListener('click', () => {
        workModal.classList.remove('active');
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
    
    // 点击模态框外部关闭
    workModal.addEventListener('click', (e) => {
        if (e.target === workModal) {
            workModal.classList.remove('active');
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        }
    });
    
    // 移动端菜单切换
    mobileMenuBtn.addEventListener('click', () => {
        if (mainNav.style.display === 'block' || mainNav.style.display === '') {
            mainNav.style.display = 'none';
        } else {
            mainNav.style.display = 'block';
        }
    });
    
    // 导航链接点击
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是锚点链接，平滑滚动
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                
                // 移动端点击后关闭菜单
                if (window.innerWidth <= 768) {
                    mainNav.style.display = 'none';
                }
            }
            
            // 更新活动链接
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 窗口大小调整时处理菜单显示
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainNav.style.display = 'block';
        } else {
            mainNav.style.display = 'none';
        }
    });
    
    // 按ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && workModal.classList.contains('active')) {
            workModal.classList.remove('active');
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        }
    });
}

// 渲染作品
function renderWorks(category) {
    // 显示加载动画
    worksGrid.innerHTML = '';
    loader.style.display = 'block';
    emptyState.style.display = 'none';
    
    // 过滤作品
    const filteredWorks = category === 'all' 
        ? works 
        : works.filter(work => work.category === category);
    
    // 模拟加载延迟
    setTimeout(() => {
        loader.style.display = 'none';
        
        if (filteredWorks.length === 0) {
            emptyState.style.display = 'block';
            return;
        }
        
        // 渲染作品
        filteredWorks.forEach(work => {
            const workElement = createWorkElement(work);
            worksGrid.appendChild(workElement);
        });
    }, 300);
}

// 创建作品元素 - 移除视频悬停播放功能，改用静态预览
function createWorkElement(work) {
    const workItem = document.createElement('div');
    workItem.className = 'work-item';
    workItem.setAttribute('data-category', work.category);
    
    // 图片或视频内容
    let mediaContent = '';
    if (work.category === 'image') {
        // 图片直接显示
        mediaContent = `
            <img class="work-img" src="${work.url}" alt="${work.title}" 
                 onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<div style=\\'width:100%;height:200px;background:#f0f0f0;display:flex;align-items:center;justify-content:center;\\'><i class=\\'fas fa-image\\' style=\\'color:#ccc;font-size:2rem;\\'></i></div>'">
        `;
    } else {
        // 视频：只显示静态图片预览，不加载视频
        // 对于视频作品，我们需要一个预览图
        // 如果没有专门的预览图，我们可以显示一个播放按钮图标
        mediaContent = `
            <div class="work-video-preview" style="background-color: #333; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-play-circle" style="color: rgba(255,255,255,0.8); font-size: 3rem;"></i>
            </div>
            <div class="video-overlay">
                <i class="fas fa-play"></i>
            </div>
            <div class="video-tag">
                <i class="fas fa-play"></i> 视频
            </div>
        `;
    }
    
    // 标签HTML
    const tagsHtml = work.tags.map(tag => `<span class="work-tag">${tag}</span>`).join('');
    
    workItem.innerHTML = `
        <div class="work-media">
            ${mediaContent}
        </div>
        <div class="work-info">
            <h3>${work.title}</h3>
            <p>${work.description}</p>
            <div class="work-tags">${tagsHtml}</div>
            <p class="work-date">${work.date}</p>
        </div>
    `;
    
    // 添加点击事件
    workItem.addEventListener('click', () => openWorkModal(work));
    
    // 移除视频悬停效果，防止崩溃
    // 如果需要视频预览功能，可以在这里添加低性能消耗的预览
    
    return workItem;
}

// 打开作品模态框
function openWorkModal(work) {
    // 暂停当前活动的视频
    if (currentActiveVideo) {
        currentActiveVideo.pause();
        currentActiveVideo.currentTime = 0;
    }
    
    modalTitle.textContent = work.title;
    modalDesc.textContent = work.description;
    modalDate.textContent = `创作时间: ${work.date}`;
    
    // 设置标签
    modalTags.innerHTML = '';
    work.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'work-tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });
    
    if (work.category === 'image') {
        modalImg.src = work.url;
        modalImg.style.display = 'block';
        modalVideo.style.display = 'none';
        modalVideo.src = '';
        currentActiveVideo = null;
    } else {
        // 对于视频，我们只在模态框中加载和播放
        modalVideo.src = work.url;
        modalVideo.style.display = 'block';
        modalImg.style.display = 'none';
        modalImg.src = '';
        currentActiveVideo = modalVideo;
        
        // 视频加载完成后自动播放
        modalVideo.onloadeddata = function() {
            modalVideo.play().catch(e => {
                console.log("视频自动播放失败:", e);
            });
        };
    }
    
    workModal.classList.add('active');
}

// 页面滚动时更新导航栏活动状态
window.addEventListener('scroll', debounce(function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 100));

// 联系方式功能
document.addEventListener('DOMContentLoaded', function() {
    setupContactInfo();
});

function setupContactInfo() {
    // 创建复制成功提示
    const copySuccess = document.createElement('div');
    copySuccess.className = 'copy-success';
    copySuccess.textContent = '已复制到剪贴板！';
    document.body.appendChild(copySuccess);
    
    // 您的联系方式信息
    const contactData = {
        qq: "3257602454",  // 请替换为您的QQ号码
        wechat: "Elysia0604",  // 请替换为您的微信号
        email: "3257602454@qq.com"  // 请替换为您的邮箱地址
    };
    
    // 联系方式文本点击事件
    document.querySelectorAll('.contact-text').forEach(textElement => {
        const id = textElement.id.replace('Text', '');
        
        textElement.addEventListener('click', function() {
            // 显示联系方式
            this.textContent = contactData[id];
            this.style.color = 'var(--primary-color)';
            
            // 显示复制按钮
            const copyBtn = this.nextElementSibling;
            copyBtn.style.display = 'inline-block';
        });
    });
    
    // 复制按钮点击事件
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', function() {
            const contactType = this.getAttribute('data-id');
            const textToCopy = contactData[contactType];
            
            // 使用现代Clipboard API
            navigator.clipboard.writeText(textToCopy).then(() => {
                // 显示复制成功提示
                copySuccess.style.display = 'block';
                
                // 3秒后隐藏提示
                setTimeout(() => {
                    copySuccess.style.display = 'none';
                }, 3000);
                
                // 按钮状态反馈
                const originalText = this.textContent;
                this.textContent = '已复制！';
                this.style.backgroundColor = '#2ecc71';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = '';
                }, 2000);
                
            }).catch(err => {
                console.error('复制失败: ', err);
                // 备用复制方法
                fallbackCopyText(textToCopy);
            });
        });
    });
    
    // 备用复制方法
    function fallbackCopyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                copySuccess.style.display = 'block';
                setTimeout(() => {
                    copySuccess.style.display = 'none';
                }, 3000);
            }
        } catch (err) {
            console.error('备用复制方法失败: ', err);
            alert('复制失败，请手动复制：' + text);
        }
        
        document.body.removeChild(textArea);
    }
    
    // 添加邮箱链接
    const emailElement = document.getElementById('emailText');
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            // 点击后显示邮箱并创建链接
            this.innerHTML = `<a href="mailto:${contactData.email}" style="color: var(--primary-color); text-decoration: none;">${contactData.email}</a>`;
            
            // 显示复制按钮
            const copyBtn = this.nextElementSibling;
            copyBtn.style.display = 'inline-block';
        });
    }
}