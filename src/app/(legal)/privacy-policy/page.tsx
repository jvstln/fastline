import Link from "next/link";

export const metadata = {
	title: "Privacy Policy",
	description: "Fastline Integrated Services Ltd Privacy Policy",
};

const PrivacyPolicy = () => {
	return (
		<div>
			<section>
				<h2>Introduction</h2>
				<p>
					Fastline Integrated Services Limited is committed to protecting your
					personal data in accordance with the Nigeria Data Protection
					Regulation (NDPR) 2019 and applicable law.
				</p>
			</section>
			<section>
				<h2>Information We Collect</h2>
				<p>
					<span className="font-medium">Personal Information:</span> Name,
					company, contact (phone, email), industry, site location when you
					request a quote or schedule a consultation.
				</p>
				<p>
					<span className="font-medium">Technical Information:</span> IP
					addresses, browser type, usage data (e.g., pages visited, timestamps)
					via cookies and analytics tools.
				</p>
			</section>
			<section>
				<h2>How We Use Your Information</h2>
				<p>Your data is used to:</p>
				<ul>
					<li>Provide requested services (quotes, consultations)</li>
					<li>Communicate updates, follow-ups, or service-related matters</li>
					<li>Improve our website and user experience</li>
					<li>Comply with legal or regulatory obligations</li>
				</ul>
			</section>
			<section>
				<h2>Legal Basis for Processing</h2>
				<p>
					<span className="font-medium">Consent:</span> When you provide your
					details for consultations or services.
				</p>
				<p>
					<span className="font-medium">Contract Performance:</span> To fulfil
					service delivery.
				</p>
				<p>
					<span className="font-medium">Legal Compliance:</span> As required by
					Nigerian law (NDPR).
				</p>
				<p>
					<span className="font-medium">Legitimate Interest:</span> For business
					administration and website improvement.
				</p>
			</section>
			<section>
				<h2>Data Sharing</h2>
				<p>
					We do not sell your personal data. We may share data with trusted
					service providers (e.g., hosting, email, analytics) bound by
					confidentiality. Data may also be shared if required by law.
				</p>
			</section>
			<section>
				<h2>Data Retention</h2>
				<p>
					We retain your data only as long as necessary for service delivery or
					legal compliance. Once no longer required, data is securely deleted or
					anonymized.
				</p>
			</section>
			<section>
				<h2>Your Rights</h2>
				<p className="font-medium">You have the right to:</p>
				<ul>
					<li>Access, correct, or delete your personal data</li>
					<li>Withdraw consent</li>
					<li>
						Lodge a complaint with the Nigeria Data Protection Commission (NDPC)
					</li>
				</ul>
			</section>
			<section>
				<h2>Cookies & Tracking</h2>
				<p>
					We use cookies to enhance user experience and analytics. You may
					disable cookies via your browser, though this may affect usability.
				</p>
			</section>
			<section>
				<p>
					To exercise these rights, please contact us at{" "}
					<Link className="font-medium" href="mailto:info@fastlinelimited.com">
						info@fastlinelimited.com
					</Link>
					.
				</p>
			</section>
			<h2>Policy Updates</h2>
			<p>
				We may update this policy as needed—changes will be posted here with the
				effective date.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
