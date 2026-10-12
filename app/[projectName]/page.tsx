import projectsData from "@/projectsData";
import { notFound } from "next/navigation";
import ProjectAsset from "../components/ProjectAsset";
import ProjectNav from "../components/ProjectNav";

export async function generateStaticParams() {
  return projectsData.map(project => ({
    projectName: project.name,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const projectName = decodeURIComponent((await params).projectName);
  const project = projectsData.find(p => projectName === p.name);
  const assetsElements = project?.assets.map((asset, i) => (
    <ProjectAsset
      altText={`${project.name} view - ${i + 1}`}
      key={i}
      index={i}
      asset={asset}
      info={project.info}
      isLast={i === project.assets.length - 1}
    />
  ));
  if (!project) notFound();
  const projectIndex = projectsData.indexOf(project);
  return (
    <div
      className={
        "min-h-[100dvh] bg-neutral-50 text-neutral-950" +
        " " +
        project.name
      }>
      <ProjectNav
        nextPage={projectsData[projectIndex + 1]?.name}
        previousPage={projectsData[projectIndex - 1]?.name}
      />
      <main className="m-auto max-w-[1100px] overflow-x-clip px-6 md:px-10 xl:max-w-[85%] xl:px-0">
        <div className="pt-4 md:pt-7 lg:pt-10 pb-20 md:pb-40">
          {assetsElements}
        </div>
      </main>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) {
  const projectName = decodeURIComponent((await params).projectName);
  const project = projectsData.find(p => projectName === p.name);

  return {
    title: `${projectName} | Zahava Kallus Portfolio`,
    description:
      projectsData[projectsData.indexOf(project!)].assets[0]
        .description?.paragraph,
  };
}
