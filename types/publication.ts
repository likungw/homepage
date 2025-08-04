export interface Publication {
  title: string;         // 论文标题
  journal: string;       // 期刊或会议名
  date: string;          // 发表日期
  link?: string;         // 论文链接
  repo?: string;         // 代码仓库链接
  award?: string;        // 奖项（如果有）
  corresponding?: boolean; // 是否为通信作者
}
