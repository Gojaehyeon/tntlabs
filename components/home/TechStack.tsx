import styles from './TechStack.module.css';

interface StackItem {
  name: string;
  highlight?: boolean;
  accent?: boolean;
}

interface TechStack {
  label: string;
  items: StackItem[];
}

const techStacks: TechStack[] = [
  {
    label: 'Mobile',
    items: [
      { name: 'SwiftUI', highlight: true },
      { name: 'UIKit', highlight: true },
      { name: 'React Native' },
      { name: 'Flutter' },
    ],
  },
  {
    label: 'Apple',
    items: [
      { name: 'iOS', accent: true },
      { name: 'iPadOS', accent: true },
      { name: 'watchOS' },
      { name: 'visionOS' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Supabase' },
      { name: 'Firebase' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    label: 'Others',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Figma' },
      { name: 'Git' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className={styles.techstack}>
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">우리가 다루는 기술들</p>

        <div className={styles.stackContainer}>
          {techStacks.map((stack) => (
            <div key={stack.label} className={styles.stackRow}>
              <span className={styles.stackLabel}>{stack.label}</span>
              <div className={styles.stackItems}>
                {stack.items.map((item) => (
                  <span
                    key={item.name}
                    className={`${styles.stackItem} ${item.highlight ? styles.highlight : ''} ${item.accent ? styles.accent : ''}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
