import { Publication } from "../types/publication";

export const publications: Publication[] = [
  
  {
  title: "EvoCG: Self-Evolving Precision Control for Faster Conjugate Gradient",
  authors: "Jiaqi Zhai, Haozhi Han, Kaiyi Huang, Wenju Zhao, Yifeng Chen, Yunquan Zhang, Ting Cao, Yunxin Liu, Hai Jin, Xuanhua Shi*, Kun Li*",
  journal: "PPoPP 2027",
  date: "2027",
  venue: "PPoPP",
  researchArea: "High-Performance Computing",
  },
  {
  title: "Tessellating Matrix-Power-Vector Kernel",
  authors: "Zixuan Wang, Liang Yuan, Hang Cao, Xianmeng Jiang, Kun Li, Yunquan Zhang",
  journal: "PPoPP 2027",
  date: "2027",
  venue: "PPoPP",
  researchArea: "High-Performance Computing",
  },
  // SC 2026
  {
    title: "SPIKe: Generating Practical SpMV Kernels for Sparse Iterative Methods on GPUs",
    authors: "Luhan Wang, Haipeng Jia, Kun Li, Zongyuan He, Shengguo Li, Ting Cao, Yunxin Liu, Yunquan Zhang, Yifeng Chen",
    journal: "SC 2026",
    date: "2026",
    link: "https://sc26.conference-program.com/presentation/?id=pap380&sess=sess205",
    venue: "SC",
    researchArea: "High-Performance Computing",
  },

  // NeurIPS 2026
  {
    title: "AtomWorld-Mem: Memory-Restored World States for Long-Horizon Atomistic Evolution",
    authors: "Tian Luo, Ruge Zhang, Haozhi Han, Yifeng Chen, Yunquan Zhang, Yunxin Liu, Ting Cao, Kun Li*",
    journal: "NeurIPS 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2609.31133",
    project: "https://www.likun.tech/projects/atomworld-mem",
    venue: "NeurIPS",
    researchArea: "AI for Science",
  },

  // Scientific World Models
  {
    title: "AtomWorld-Mirror: Macro-Step World Modeling of Critical Evolution Backbones for Materials Dynamics",
    authors: "Ziming Pan, Ruge Zhang, Haozhi Han, Junkai Zhou, Xingyuan Chen, Yifeng Chen, Yunquan Zhang, Ting Cao, Yunxin Liu, Kun Li*",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2610.11527",
    project: "https://atomworld-mirror.github.io/",
    venue: "arXiv",
    researchArea: "AI for Science",
  },

  // World Models and Efficient Inference
  {
    title: "Efficient World Action Model Inference with Adaptive Intermediate States",
    authors: "Zhinnan Liu, Haozhi Han, Ruge Zhang, Teng Ma, Tao Ma, Zheng Liu, Yifeng Chen, Yunquan Zhang, Ting Cao, Yunxin Liu, Kun Li",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2609.34608",
    project: "https://parrotkk.github.io/WAMachine_page/",
    venue: "arXiv",
    researchArea: "AI Systems",
  },

  // Physical AI and Self-Evolving Agents
  {
    title: "Zeva-Ego: Egocentric Mid-Training with In-Context Causal Learning for Robot Manipulation",
    authors: "Bingjia Huang, Xin Ding, Fu Chen, Kun Li, Wei Sun, Hao Wu, Yunxin Liu, Ting Cao",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2609.24411",
    venue: "arXiv",
    researchArea: "AI Systems",
  },
  {
    title: "Zeva: In-Context Causal Learning for Generalizable Embodied Manipulation",
    authors: "Fu Chen, Xin Ding, Bingjia Huang, Xiangyu Li, Mingju Wang, Jiawei He, Kun Li, Wei Sun, Yunxin Liu, Hao Wu, Ting Cao",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2608.30880",
    repo: "https://github.com/air-embodied-brain/Zeva",
    venue: "arXiv",
    researchArea: "AI Systems",
  },
  {
    title: "Zetta ζ: An Efficient Closed-Loop Embodied Harness for Self-Evolving Physical Intelligence",
    authors: "Xin Ding, Liang Mi, Mingzhe Huang, Zixuan Wang, Chao Zhang, Zixu Hao, Fu Chen, Xiangyu Li, Yikai Zheng, Yaoyu Guo, Weijun Wang, Kun Li, Hao Wu, Yunxin Liu, Ting Cao",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2608.16590",
    repo: "https://github.com/air-embodied-brain/Zetta-Embodiment",
    project: "https://air-embodied-brain.github.io/zetta/",
    venue: "arXiv",
    researchArea: "AI Systems",
  },
  {
    title: "ActProbe: Action-Space Probe for Early Failure Detection of Generative Robot Policies",
    authors: "Bingjia Huang, Xiangyu Li, Xiang Wang, Liang Mi, Zixu Hao, Weijun Wang, Hao Wu, Kun Li, Yunxin Liu, Ting Cao",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2606.08508",
    repo: "https://github.com/air-embodied-brain/actprobe",
    project: "https://air-embodied-brain.github.io/actprobe/",
    venue: "arXiv",
    researchArea: "AI Systems",
  },
  {
    title: "EmbodiSkill: Skill-Aware Reflection for Self-Evolving Embodied Agents",
    authors: "Ruofei Ju, Xinrui Wang, Xin Ding, Yifan Yang, Hao Wu, Shiqi Jiang, Qianxi Zhang, Hao Wen, Xiangyu Li, Weijun Wang, Kun Li, Yunxin Liu, Haipeng Dai, Wei Wang, Ting Cao",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2605.10332",
    repo: "https://github.com/air-embodied-brain/EmbodiSkill",
    project: "https://air-embodied-brain.github.io/EmbodiSkill/",
    venue: "arXiv",
    researchArea: "AI Systems",
  },
  {
    title: "MemCompiler: Compile, Don't Inject -- State-Conditioned Memory for Embodied Agents",
    authors: "Xin Ding, Xinrui Wang, Yifan Yang, Hao Wu, Shiqi Jiang, Qianxi Zhang, Liang Mi, Hanxin Zhu, Kun Li, Yunxin Liu, Zhibo Chen, Ting Cao",
    journal: "arXiv preprint, 2026",
    date: "2026",
    link: "https://arxiv.org/abs/2605.07594",
    repo: "https://github.com/air-embodied-brain/MemCompiler",
    venue: "arXiv",
    researchArea: "AI Systems",
  },
  {
    title: "MakoXC: Rearchitecting DFT Exchange-Correlation with Matrix-Aligned and Knowledge-Organized Sparsity",
    authors: "Haozhi Han, Fusong Ju, Jing Bai, Ruge Zhang, Xiang Zhao, Liang Yuan, Yunquan Zhang, Ting Cao, Yunxin Liu, Yifeng Chen, and Kun Li*",
    journal: "SC 2026",
    link: "../pdf/SC26_MakoXC__arxiv_.pdf", 
    date: "2026", 
    corresponding: true, 
  },
  {
    title: "PyramidFFT: Rearchitecting FFT with Matrix-Aligned Nested-Radix for Hierarchical Scratchpad Memory on AI Accelerators",
    authors: "Xiang Zhao, Ruge Zhang, Haipeng Jia*, Kun Li*, Jianliang Xu, Ting Cao, Yunxin Liu, Yunquan Zhang",
    journal: "ACM Transactions on Architecture and Code Optimization",
    date: "2026", 
    corresponding: true, 
  },
  {
    title: "Redundant Array Computation Elimination",
    authors: "Zixuan Wang, Liang Yuan, Xianmeng Jiang, Kun Li, Junmin Xiao, Yunquan Zhang",
    journal: "47th ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI 2026)",
    date: "2026", 
    corresponding: false, 
  },
  {
    title: "Pushing a Single GPU to Its Limits and Scaling to Tens of Thousands: RL-Guided, Physically Consistent KMC for Nuclear Materials Simulation",
    authors: "Haozhi Han, Qi Li, Ruge Zhang, Haipeng Jia, Yunquan Zhang, Yifeng Chen, Ting Cao, Yunxin Liu, Kun Li*",
    journal: "ISC High Performance 2026",
    date: "2026", 
    link: "../pdf/pap136s3.pdf",
    corresponding: true, 
  },
  {
    title: "MatXtract: Sparsity-Aware Matrix Transformation via Cascaded Compute Density EXtraction for SpMV",
    authors: "Luhan Wang, Kun Li*, Yifeng Chen, Haipeng Jia, Yunquan Zhang, Ting Cao, Yunxin Liu",
    journal: "ACM Transactions on Architecture and Code Optimization",
    date: "2026",
    link: "../pdf/3793864.pdf",
    corresponding: true,
    award: "Selected for ACM Showcase (2026)"
  },
  {
    title: "SwarmThinkers: Learning Physically Consistent Atomic KMC Transitions at Scale",
    authors: "Qi Li, Kun Li*, Haozhi Han, Honghui Shang, Xinfu He, Yunquan Zhang, Hong An, Ting Cao, Mao Yang",
    journal: "arXiv",
    date: "2025",
    link: "https://arxiv.org/abs/2505.20094",
    corresponding: true
  },
  {
    title: "SparStencil: Retargeting Sparse Tensor Cores to Scientific Stencil Computations via Structured Sparsity Transformation",
    authors: "Qi Li, Kun Li*, Haozhi Han, Liang Yuan, Junshi Chen, Yunquan Zhang, Yifeng Chen, Hong An, Ting Cao, Mao Yang",
    journal: "SC 2025",
    date: "2025", 
    link: "../pdf/sc25_53.pdf",
    corresponding: true,
    award: "Best Student Paper Award Finalist"
  },
  {
    title: "Matrix Is All You Need: Rearchitecting Quantum Chemistry to Scale on AI Accelerators. (Formerly titled: From Deep Learning to Deep Science: AI Accelerators Scaling Quantum Chemistry Beyond Limits.)",
    authors: "Haozhi Han, Kun Li*, Fusong Ju, Qi Li, Yifeng Chen, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "SC 2025",
    date: "2025",
    link: "../pdf/sc25_62.pdf",
    corresponding: true
  },
  {
    title: "Matryoshka: Optimization of Dynamic Diverse Quantum Chemistry Systems via Elastic Parallelism Transformation",
    authors: "Tuowei Wang, Kun Li*, Donglin Bai, Fusong Ju, Leo Xia, Ju Ren, Yaoxue Zhang, Ting Cao, Mao Yang",
    journal: "To be appeared",
    date: "2025",
    link: "https://arxiv.org/abs/2412.13203",
    corresponding: true
  },
  {
    title: "JENGA: Enhancing LLM Long-Context Fine-tuning with Contextual Token Sparsity",
    authors: "Tuowei Wang, Xingyu Chen, Kun Li, Ting Cao, Ju Ren, Yaoxue Zhang",
    journal: "ATC 2025",
    date: "2025",
    link: "https://www.usenix.org/system/files/atc25-wang-tuowei.pdf"
  },
  {
    title: "Neuralink: Fast LLM Inference on Smartphones with Neuron Co-Activation Linking",
    authors: "Tuowei Wang, Ruwen Fan, Minxing Huang, Zixu Hao, Kun Li, Ting Cao, Youyou Lu, Yaoxue Zhang, Ju Ren",
    journal: "ASPLOS 2025",
    date: "2025",
    link: "https://arxiv.org/abs/2410.19274"
  },
  {
    title: "FlashFFTStencil: Bridging Fast Fourier Transforms to Memory-Efficient Stencil Computations on Tensor Core Units",
    authors: "Haozhi Han, Kun Li*, Wei Cui, Donglin Bai, Yiwei Zhang, Liang Yuan, Yifeng Chen, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "PPoPP 2025",
    date: "2025",
    link: "../pdf/ppopp25_FlashFFTStencil.pdf",
    corresponding: true
  },
  {
    title: "Jigsaw: Toward Conflict-free Vectorized Stencil Computation by Tessellating Swizzled Registers",
    authors: "Yiwei Zhang, Kun Li*, Liang Yuan, Haozhi Han, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "PPoPP 2025",
    date: "2025",
    link: "../pdf/ppopp25_Jigsaw.pdf",
    corresponding: true
  },
  {
    title: "LoRAStencil: Low-Rank Adaptation of Stencil Computation on Tensor Cores",
    authors: "Yiwei Zhang, Kun Li*, Liang Yuan, Jiawen Cheng, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "SC 2024",
    date: "2024",
    link: "../pdf/sc24_lorastencil.pdf",
    corresponding: true,
    award: "Reproducibility Challenge Finalist"
  },
  {
    title: "LONG EXPOSURE: Accelerating Parameter-Efficient Fine-Tuning for LLMs under Shadowy Sparsity",
    authors: "Tuowei Wang, Kun Li*, Zixu Hao, Donglin Bai, Ju Ren, Yaoxue Zhang, Ting Cao, Mao Yang",
    journal: "SC 2024",
    date: "2024",
    link: "../pdf/sc24_longexposure.pdf",
    corresponding: true
  },
  {
    title: "VNEC: A Vectorized Non-Empty Column Format for SpMV on CPUs",
    authors: "Luhan Wang, Haipeng Jia, Lei Xu, Cunyang Wei, Kun Li, Xianmeng Jiang, Yunquan Zhang",
    journal: "IPDPS 2024",
    date: "2024",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10579118"
  },
  {
    title: "ConvStencil: Transform Stencil Computation to Matrix Multiplication on Tensor Cores",
    authors: "Yuetao Chen, Kun Li*, Yuhao Wang, Donglin Bai, Lei Wang, Lingxiao Ma, Liang Yuan, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "PPoPP 2024",
    date: "2024",
    link: "../pdf/ppopp24_ConvStencil.pdf",
    corresponding: true,
    award: "Best Paper Award"
  },
  {
    title: "OpenFFT: An Adaptive Tuning Framework for 3D FFT on ARM Multicore CPUs",
    authors: "Tun Chen, Haipeng Jia, Yunquan Zhang, Kun Li, Zhihao Li, Xiang Zhao, Jianyu Yao",
    journal: "ICS 2023",
    date: "2023",
    link: ""
  },
  {
    title: "AGCM-3DLF: Accelerating Atmospheric General Circulation Model via 3D Parallelization and Leap-Format",
    authors: "Hang Cao, Liang Yuan, He Zhang, Yunquan Zhang, Baodong Wu, Kun Li, Shigang Li, Minghua Zhang, Pengqi Lu, Junmin Xiao",
    journal: "TPDS 2023",
    date: "2023",
    link: ""
  },
  {
    title: "EgpuIP: An Embedded GPU Accelerated Library for Image Processing",
    authors: "Luhan Wang, Haipeng Jia, Yunquan Zhang, Kun Li, Cunyang Wei",
    journal: "HPCC 2022",
    date: "2022",
    link: ""
  },
  {
    title: "LBBGEMM: A Load-Balanced Batch GEMM Framework on ARM CPUs",
    authors: "Cunyang Wei, Haipeng Jia, Yunquan Zhang, Kun Li, Luhan Wang",
    journal: "HPCC 2022",
    date: "2022",
    link: ""
  },
  {
    title: "An Efficient Vectorization Scheme for Stencil Computation",
    authors: "Kun Li, Liang Yuan, Yunquan Zhang, Yue Yue, Hang Cao",
    journal: "IPDPS 2022",
    date: "2022",
    link: "https://arxiv.org/pdf/2103.08825"
  },
  {
    title: "An Accurate and Efficient Large-scale Regression Method through Best Friend Clustering",
    authors: "Kun Li, Liang Yuan, Yunquan Zhang, Gongwei Chen",
    journal: "TPDS 2022",
    date: "2022",
    link: "../pdf/An_Accurate_and_Efficient_Large-Scale_Regression_Method_Through_Best_Friend_Clustering.pdf"
  },
  {
    title: "Reducing Redundancy in Data Organization and Arithmetic Calculation for Stencil Computations",
    authors: "Kun Li, Liang Yuan, Yunquan Zhang, Yue Yue",
    journal: "SC 2021",
    date: "2021",
    link: "https://dl.acm.org/doi/pdf/10.1145/3458817.3476154"
  },
  {
    title: "Temporal Vectorization for Stencils",
    authors: "Liang Yuan, Hang Cao, Yunquan Zhang, Kun Li, Pengqi Lu, Yue Yue",
    journal: "SC 2021",
    date: "2021",
    link: "https://dl.acm.org/doi/pdf/10.1145/3458817.3476149"
  },
  {
    title: "OpenKMC: a KMC design for hundred-billion-atom simulation using millions of cores on Sunway Taihulight",
    authors: "Kun Li, Honghui Shang, Yunquan Zhang, Shigang Li, Baodong Wu, Dong Wang, Libo Zhang, Fang Li, Dexun Chen, Zhiqiang Wei",
    journal: "SC 2019",
    date: "2019",
    link: "https://dl.acm.org/doi/pdf/10.1145/3295500.3356165"
  },
  {
    title: "swMD: Performance Optimizations for Molecular Dynamics Simulation on Sunway Taihulight",
    authors: "Kun Li, Shigang Li, Bei Wang, Yifeng Chen, Yunquan Zhang",
    journal: "ISPA 2019",
    date: "2019",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9047429"
  },
  {
    title: "FastNBL: fast neighbor lists establishment for molecular dynamics simulation based on bitwise operations",
    authors: "Kun Li, Shigang Li, Shan Huang, Yifeng Chen, Yunquan Zhang",
    journal: "The Journal of Supercomputing (2019)",
    date: "2019",
    link: ""
  },
  {
    title: "Communication-Avoiding for Dynamical Core of Atmospheric General Circulation Model",
    authors: "Junmin Xiao, Shigang Li, Baodong Wu, He Zhang, Kun Li, Erlin Yao, Yunquan Zhang, Guangming Tan",
    journal: "ICPP 2018",
    date: "2018",
    link: ""
  }
];
 