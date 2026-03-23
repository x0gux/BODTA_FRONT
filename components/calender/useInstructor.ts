import { useState, useMemo } from "react";

export interface Instructor {
  id: number;
  name: string;
  team: string;
  tags: string[];
}

export const instructorList: Instructor[] = [
  { id: 1, name: "김태현", team: "세종 널 크루", tags: ["#친근한", "#어린", "#재미있는"] },
  { id: 2, name: "이민우", team: "서초 서핑 클럽", tags: ["#전문가", "#카리스마", "#꼼꼼한"] },
  { id: 3, name: "박지성", team: "강남 볼트 유닛", tags: ["#열정적인", "#체계적인", "#친절한"] },
  { id: 4, name: "최유진", team: "세종 널 크루", tags: ["#밝은", "#에너제틱", "#유머러스"] },
];

export function useInstructor() {
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor>(instructorList[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredInstructors = useMemo(() => {
    return instructorList.filter(inst =>
      inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.team.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const selectInstructor = (inst: Instructor) => {
    setSelectedInstructor(inst);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return {
    selectedInstructor,
    searchQuery,
    setSearchQuery,
    isSearchOpen,
    setIsSearchOpen,
    filteredInstructors,
    selectInstructor,
  };
}
