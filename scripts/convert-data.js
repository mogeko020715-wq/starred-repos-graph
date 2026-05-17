const entities = require('/tmp/spirit-map-prototype/entities.json');
const relationships = require('/tmp/spirit-map-prototype/relationships.json');

// Convert to starred-repos-graph format
const typeToCategory = {
  'game': '游戏',
  'book': '书籍',
  'movie': '电影',
  'series': '剧集',
  'music': '音乐',
  'musical': '音乐剧',
  'anime': '动漫',
  'insight': '洞察',
  'philosopher': '哲学家',
  'topic': '主题'
};

const typeColors = {
  'game': '#8b5cf6',      // Violet
  'book': '#10b981',      // Emerald
  'movie': '#f59e0b',     // Amber
  'series': '#f472b6',    // Rose
  'music': '#06b6d4',     // Cyan
  'musical': '#ec4899',   // Pink
  'anime': '#6366f1',     // Indigo
  'insight': '#84cc16',   // Lime
  'philosopher': '#14b8a6', // Teal
  'topic': '#ef4444'      // Red
};

const repositories = entities.map(entity => ({
  id: entity.id,
  name: entity.name,
  owner: entity.entity_type,
  fullName: `${entity.entity_type}/${entity.id}`,
  description: entity.topic_name || '',
  url: '#',
  language: entity.entity_type,
  stars: Math.floor(Math.random() * 100) + 10,
  forks: 0,
  category: typeToCategory[entity.entity_type] || '其他',
  categoryScore: 10,
  secondaryCategories: [typeToCategory[entity.entity_type] || '其他'],
  displayCategory: typeToCategory[entity.entity_type] || '其他',
  updatedAt: new Date().toISOString(),
  topics: (entity.topic_name || '').split('·')
}));

const output = {
  totalCount: repositories.length,
  lastUpdated: new Date().toISOString(),
  source: 'spirit-map',
  username: 'mogeko020715-wq',
  repositories: repositories
};

console.log(JSON.stringify(output, null, 2));
