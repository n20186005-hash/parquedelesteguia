import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务条款 | Pozos Azules 旅行指南",
  description: "Pozos Azules 旅行指南服务条款",
};

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
          服务条款
        </h1>
        <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>
          最后更新时间：2026年6月
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            1. 接受条款
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            通过访问和使用本网站（Pozos Azules 旅行指南），您同意遵守这些服务条款以及所有适用的法律和法规。如果您不同意这些条款的任何部分，请勿使用本网站。
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            2. 网站性质
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            本网站是一个独立的第三方旅游资讯平台，旨在为游客提供信息。我们与哥伦比亚政府、旅游局或 Pozos Azules 的官方管理机构没有任何附属、赞助或官方合作关系。
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            3. 信息准确性
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            我们努力提供准确和最新的信息，但不对内容的完整性、准确性或可靠性作出任何明示或暗示的保证。景点开放时间、门票价格和规则可能随时更改，建议在出行前进行核实。
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            4. 知识产权
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            本网站上的所有文本、布局和设计均为本网站的财产。网站上使用的部分图片来自公共领域或遵守免版税许可（如 Unsplash）。未经明确许可，不得将本网站的原始内容用于商业用途。
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            5. 免责声明
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            对于因使用本网站信息而导致的任何直接、间接、偶然或后果性的损失或损害，包括但不限于行程延误、财务损失或人身伤害，我们不承担任何责任。户外活动具有内在风险，游客应自行承担风险并遵守当地规定。
          </p>
        </section>

        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          <Link href={`/${resolvedParams.lang}`} style={{ color: "var(--color-teal)", textDecoration: "none" }}>
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
