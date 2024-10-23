import { useLocalStorageState } from "ahooks";
import type React from "react";
import { useEffect } from "react";

import "./ThemeManager.scss";

type Season = "winter" | "spring" | "summer" | "autumn";
const seasons: Season[] = ["winter", "spring", "summer", "autumn"];
const seasonEmojis: Record<Season, string> = {
  winter: "❄️",
  spring: "🌱",
  summer: "🌞",
  autumn: "🍂",
};

export const ThemeManager: React.FC = () => {
  const [themeSeason, setThemeSeason] = useLocalStorageState<
    Season | undefined
  >("rewdy.lol-theme", {
    defaultValue: undefined,
  });
  const month = new Date().getMonth();
  const currentSeason = seasons[Math.floor(((month + 1) % 12) / 3)];

  const season = themeSeason || currentSeason;
  const themeClass = `theme-${season}`;

  const handleSetTheme = (season: Season) => {
    if (currentSeason === season) {
      setThemeSeason(undefined);
    } else {
      setThemeSeason(season);
    }
  };

  useEffect(() => {
    for (const cls of document.body.classList) {
      if (cls.startsWith("theme-")) {
        document.body.classList.remove(cls);
      }
    }
    document.body.classList.add(themeClass);
  }, [themeClass]);

  return (
    <ul className="inline-list" style={{ justifyContent: "center" }}>
      <li className="text-small">Theme: </li>
      {seasons.map((s) => {
        const classes: string[] = [s];
        if (s === season) classes.push("active-theme");
        if (themeSeason) classes.push("custom");
        return (
          <li key={s} className={classes.join(" ")}>
            <button
              type="button"
              title={`Set theme to ${s}`}
              className="btn btn-text"
              onClick={() => handleSetTheme(s)}
            >
              {seasonEmojis[s]}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
