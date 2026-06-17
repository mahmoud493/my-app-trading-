import { DashboardShell } from '../../components/layout/DashboardShell';

export default function SettingsPage() {
  return (
    <DashboardShell title="Paramètres" description="Configuration de votre compte, notifications et préférences de dashboard.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Profil utilisateur</h2>
            <div className="mt-5 space-y-4 text-sm text-muted">
              <p><span className="text-white">Email:</span> trader@example.com</p>
              <p><span className="text-white">Role:</span> Administrateur stratégique</p>
              <p><span className="text-white">Connexion:</span> Dernière connexion il y a 2h</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Notifications</h2>
            <div className="mt-5 space-y-4 text-sm text-muted">
              <div className="flex items-center justify-between rounded-3xl border border-white/5 bg-[#0b1527] p-4">
                <p>Alertes drawdown</p>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">Activé</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl border border-white/5 bg-[#0b1527] p-4">
                <p>Rapport hebdomadaire</p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-muted">Désactivé</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Thème</h2>
            <p className="mt-2 text-sm text-muted">Changez le mode d’affichage pour une expérience encore plus immersive.</p>
            <div className="mt-6 rounded-3xl border border-white/5 bg-[#0b1527] p-5">
              <p className="text-sm text-muted">Mode sombre activé par défaut pour les environnements de trading.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#101b2f] p-6 shadow-surface">
            <h2 className="text-xl font-semibold text-white">Sécurité</h2>
            <div className="mt-5 space-y-4 text-sm text-muted">
              <p>Connexion JWT sécurisée avec tokens courts.</p>
              <p>Multi-factor auth disponible en interne pour la prochaine version.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
