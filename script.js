const DATA = {
  profiles: [
    {
      id: 'riria',
      name: 'りりあ',
      image: 'riria.jpg',
      description: 'やさしく穏やかな空気にまとういのししな女の子\n言葉やイラストを通して心にそっと寄り添い、小さな安心を届けます。',
      xLink: 'https://x.com/uisakiriria'
    },
    {
      id: 'hinako',
      name: 'ひなこ',
      image: 'hinako.jpg',
      description: 'AIアイドルひなこ（安藤緋名子）AIボイス・AI動画／姫路のこともっと言いたい',
      xLink: 'https://x.com/hinako_175_ando'
    }
  ],
  news: [
    {
      id: '20260131',
      date: '2026.01.31',
      title: '「月刊りりひな」1月号配布中！',
      description: '今月はりりあちゃんの楽しい4コマ漫画、ひなこちゃんの姫路で過ごすバレンタイン特集など盛りだくさん。ひなこちゃんの安藤家総出の講座も絶好調！りりあちゃんのイロミライ友の会のメンバー紹介も1月らしくて素敵。Galleryも充実。編集部からは話題の自動化がかなう最新ツールAntigravityの紹介など、AIイラストとAIの最前線の内容が盛りだくさん',
      link: 'https://ririhina.booth.pm/items/7934452'
    },
    {
      id: '20251230',
      date: '2025.12.30',
      title: '「月刊りりひな」年末号',
      description: '今月も楽しいコラムやりりあちゃんからのサークル紹介、美麗なイラストなど盛りだくさん！',
      link: 'https://ririhina.booth.pm/items/7819818'
    },
    {
      id: '20251130',
      date: '2025.11.30',
      title: '「月刊りりひな」冬のおしゃれ号',
      description: '今月もイロミライ友の会のイベント、「ふゆいろミライ」からりりひなのベストショットをお届け、その他コラムも盛りだくさん！',
      link: 'https://ririhina.booth.pm/items/7715303'
    }
  ]
};

let currentPage = 'info';

const renderInfo = () => `
  <div class="animate-fade space-y-12">
    <div>
      <h2 class="section-title">Information</h2>
      <p class="section-subtitle">最新の更新内容</p>
    </div>
    <div class="space-y-10">
      ${DATA.news.map(item => `
        <div class="boxy-card">
          <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <span class="btn-pill">Update</span>
            <span class="font-mono" style="font-weight: 700; font-size: 1.125rem;">${item.date}</span>
          </div>
          <h3 style="font-size: 1.875rem; font-weight: 900; margin-bottom: 1.5rem; line-height: 1.2;">${item.title}</h3>
          <p style="font-weight: 700; margin-bottom: 2rem; color: #1f2937;">${item.description}</p>
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-action">
            Check on Booth →
          </a>
        </div>
      `).join('')}
    </div>
    <div class="boxy-card opacity-30 border-dashed" style="height: 12rem; align-items: center; justify-content: center; text-align: center;">
      <h3 class="text-xl italic uppercase" style="color: #6b7280; font-weight: 700;">More updates coming soon</h3>
    </div>
  </div>
`;

const renderProfiles = () => `
  <div class="animate-fade">
    <div style="margin-bottom: 3rem;">
      <h2 class="section-title">Profile</h2>
    </div>
    <div class="grid grid-2">
      ${DATA.profiles.map(profile => `
        <div class="profile-card">
          <div class="profile-img-container">
            <img src="${profile.image}" alt="${profile.name}">
          </div>
          <h3 class="profile-name">${profile.name}</h3>
          <p class="profile-desc">${profile.description}</p>
          <a href="${profile.xLink}" target="_blank" rel="noopener noreferrer" class="profile-link">
            X: ${profile.xLink.split('/').pop()}
          </a>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderCommunity = () => `
  <div class="animate-fade">
    <div style="margin-bottom: 3rem;">
      <h2 class="section-title">Community</h2>
      <p class="section-subtitle">イロミライ友の会</p>
    </div>
    <div class="space-y-8">
      <div class="boxy-card">
        <span class="btn-pill">Join Us</span>
        <h3 style="font-size: 1.875rem; font-weight: 900; margin-bottom: 1rem;">「イロミライ友の会」会員募集</h3>
        <p style="font-weight: 700; margin-bottom: 2rem;">イロミライ友の会で仲間と楽しみながら交流・気軽にアイデアや作品をシェアしよう</p>
        <a href="https://x.com/i/communities/1968642344057446522" target="_blank" rel="noopener noreferrer" class="btn-action">
          コミュニティに参加する →
        </a>
      </div>
      <div class="boxy-card">
        <span class="btn-pill">News</span>
        <h3 style="font-size: 1.875rem; font-weight: 900; margin-bottom: 1rem;">最新情報</h3>
        <p style="font-weight: 700;">月刊りりひな最新号<br>クリエイター紹介掲載！</p>
      </div>
    </div>
    <div class="opacity-50 border-dashed" style="margin-top: 4rem; padding: 2rem; border: 2px solid black; text-align: center; background: white;">
      <p class="italic" style="font-size: 0.875rem; font-weight: 700; color: #9ca3af;">新しい報告は随時更新されます</p>
    </div>
  </div>
`;

const updateUI = () => {
  const root = document.querySelector('#content-area');
  if (!root) return;

  if (currentPage === 'info') root.innerHTML = renderInfo();
  else if (currentPage === 'profiles') root.innerHTML = renderProfiles();
  else if (currentPage === 'community') root.innerHTML = renderCommunity();

  // Update nav active states
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.getAttribute('data-page') === currentPage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  window.scrollTo(0, 0);
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const page = e.currentTarget.getAttribute('data-page');
      if (page) {
        currentPage = page;
        updateUI();
      }
    });
  });

  const logo = document.getElementById('logo');
  if (logo) {
    logo.addEventListener('click', () => {
      currentPage = 'info';
      updateUI();
    });
  }

  updateUI();
});
