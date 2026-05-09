import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Star, GitFork, BookOpen, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

export default function GitHubStats({ username }: { username: string }) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`)
        ]);
        
        if (userRes.ok) setUser(await userRes.json());
        if (reposRes.ok) setRepos(await reposRes.json());
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  if (loading) return (
    <div className="py-20 flex flex-col items-center justify-center gap-4 text-primary animate-pulse font-mono">
      <Activity className="w-8 h-8" />
      <span>SYNCING_DATA_FROM_GITHUB...</span>
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          { label: 'Public_Repos', val: user?.public_repos || 0, icon: BookOpen },
          { label: 'Network_Size', val: user?.followers || 0, icon: Github },
          { label: 'Staged_Stars', val: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0), icon: Star },
        ].map((stat) => (
          <Card key={stat.label} className="glass-card rounded-2xl border-none">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-display font-black tracking-tighter text-gradient">{stat.val}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card rounded-2xl overflow-hidden relative border-none group">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-display font-bold uppercase tracking-wider text-sm">
            <Activity className="w-4 h-4 text-primary" />
            CONTRIBUTION_MATRIX
          </CardTitle>
        </CardHeader>
        <CardContent className="py-10">
          <div className="flex justify-center overflow-x-auto pb-4 scrollbar-hide">
            <div className="min-w-[800px] flex justify-center">
              <GitHubCalendar 
                username={username} 
                colorScheme="dark"
                fontSize={12}
                blockSize={10}
                blockMargin={4}
                theme={{
                  dark: ['#1e1b4b', '#312e81', '#4338ca', '#6366f1', '#a5b4fc'],
                }}
              />
            </div>
          </div>
          <p className="text-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-4">
            Scroll horizontally to see full history on mobile
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, idx) => (
          <motion.a
            key={`${repo.id}-${idx}`}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="h-full glass-card rounded-2xl p-6 hover:translate-y-[-4px] transition-all border-none group-hover:bg-primary/5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold tracking-tight uppercase text-sm group-hover:text-primary transition-colors">
                  {repo.name.replace(/-/g, '_')}
                </h3>
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-2 min-h-[32px] font-normal">
                {repo.description || 'Architecting resilient digital solutions for the future.'}
              </p>
              <div className="flex items-center gap-6 font-mono text-[10px] tracking-tighter uppercase text-muted-foreground">
                {repo.language && (
                  <span className="text-primary font-bold">#{repo.language}</span>
                )}
                <div className="flex items-center gap-1.5">
                  <Star className="w-3 h-3 text-primary" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork className="w-3 h-3 text-primary" />
                  {repo.forks_count}
                </div>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
