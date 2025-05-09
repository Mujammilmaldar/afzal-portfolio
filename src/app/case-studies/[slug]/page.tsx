'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

const CaseStudies: Record<
  string,
  {
    title: string;
    description: string;
    mainimage: string; // New property for the main image ur
    image: string;
    challenge: string[];
    challengeDetail: {
      planningText: string;
      inventoryText: string;
      supplyChainText: string;
    };
    solution: string;
    solutionImage: string;
    results: {
      text: string[];
      metrics: string[];
    };
  }
> = {
  pleasure: {
    title: 'Pharmaceutical Supply Chain Optimization',
    mainimage:'/aboutimage.jpg',
    description:
      'For one leading pharmaceutical laboratory, success and double-digit sales growth came with a cost: an overburdened supply chain that threatened to reduce market share.',
    image: '/case-study-banner.jpg',
    challenge: [
      'The biggest challenge was that Arguzo was not utilizing technology properly. Too much of the work was still being recorded manually, which meant that the numbers took a long time to note down and then to be analyzed. Live data was also not available and decisions can only be made after all the required data and been received. This was holding Arguzo back; they knew they could corner more of the market if they had the ability to be more mobile.',
      'The work addressed three critical issues for Pharm Ltd.:',
    ],
    challengeDetail: {
      planningText: 'Improve sales and operations and production planning: The teams focused their efforts on a few of the highest-value S&OP levers in order to review the current planning process, identify gaps in the planning infrastructure and analytically understand demand and supply variability.',
      inventoryText: 'Determine the right inventory level: With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their inventory. Using a mean absolute percentage analysis (MAPE), the teams defined appropriate levels for raw materials and finished products by mapping actual versus forecasted sales on the most important SKUs.',
      supplyChainText: 'Optimize the supply chain for perfect order planning: The diagnostic determined the stressors that affected sales and service levels. The teams focused on resolving issues related to higher-than-normal back-orders and lead times, which stressed the entire supply chain and led to delays in medications reaching consumers.'
    },
    solution: 'The solution WP consulting came up with combined cutting edge technology with real world practicality. Everyone knew that the systems had to be updated, the real challenge was updating them without disrupting the whole organization in a negative way. The solution was to introduce proper workload management done through computers, while providing mobile platforms to the stakeholders.',
    solutionImage: '/solution-image.jpg',
    results: {
      text: [
        'All data and archives in a single spot. No need for mailing payslips or continually update the individual data of every representative.',
        'Every customer gets a modified methodology, not a one-size-fits-all arrangement. We comprehend that every pioneer and every association is looked with interesting difficulties and conditions, and therefore requires explicit arrangements and bearing.'
      ],
      metrics: [
        'Reduced lead time by 43%',
        'Decreased variability by 50%',
        'Lowered the risk of back-order by 95%',
        'Increased stock for finished goods by 10%'
      ]
    }
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug || !CaseStudies[slug]) {
    return <div className="text-center py-10">Case study not found.</div>;
  }

  const study = CaseStudies[slug];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Header Image and Intro */}
      <div className="mb-8">
        <Image
        src={study.image || "/placeholder-chess.jpg"}
        alt='Main Image'
        width={500}
        height={300}
        />
        <p className="text-lg text-gray-700">{study.description}</p>
      </div>

      {/* Challenge */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Challenge</h2>
        {study.challenge.map((point, idx) => (
          <p key={idx} className="mb-4 text-gray-700">{point}</p>
        ))}
        <ul className="space-y-6 mt-6">
          <li className="flex space-x-4">
            <div className="text-blue-500 font-bold">•</div>
            <div>
              <span className="font-semibold text-blue-800">Improve sales and operations and production planning:</span>
              <p className="text-gray-700">{study.challengeDetail.planningText.split('Improve sales and operations and production planning:')[1]}</p>
            </div>
          </li>
          <li className="flex space-x-4">
            <div className="text-blue-500 font-bold">•</div>
            <div>
              <span className="font-semibold text-blue-800">Determine the right inventory level:</span>
              <p className="text-gray-700">{study.challengeDetail.inventoryText.split('Determine the right inventory level:')[1]}</p>
            </div>
          </li>
          <li className="flex space-x-4">
            <div className="text-blue-500 font-bold">•</div>
            <div>
              <span className="font-semibold text-blue-800">Optimize the supply chain for perfect order planning:</span>
              <p className="text-gray-700">{study.challengeDetail.supplyChainText.split('Optimize the supply chain for perfect order planning:')[1]}</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Solution Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Solution</h2>
          <p className="text-gray-700">{study.solution}</p>
        </div>
        <div>
          <Image
            src={study.solutionImage || "/placeholder-chess.jpg"}
            alt="Solution visualization"
            width={500}
            height={300}
            className="object-cover w-full"
          />
        </div>
      </div>

      {/* Results Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Results</h2>
        {study.results.text.map((text, idx) => (
          <p key={idx} className="mb-4 text-gray-700">{text}</p>
        ))}
        <div className="mt-6">
          <p className="font-semibold mb-3 text-blue-800">By the numbers, the effort:</p>
          <ul className="space-y-2">
            {study.results.metrics.map((metric, idx) => (
              <li key={idx} className="flex space-x-4">
                <div className="text-blue-500 font-bold">•</div>
                <div className="text-gray-700">{metric}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}