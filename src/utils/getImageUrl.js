/**
 * Helper inteligente para resolver URLs de imagens.
 * Suporta:
 * 1. Links do Google Drive em todos os formatos (converte automaticamente para URL direta de alta velocidade)
 * 2. URLs diretas do Google User Content / Fotos
 * 3. URLs externas completas (https://... / http://...)
 * 4. Caminhos relativos locais (/images/...) respeitando o BASE_URL do Vite
 * 5. Fallback automático para imagem padrão caso o valor seja nulo, vazio ou inválido
 */
export function getImageUrl(path, fallback = '/images/team/sem_foto_037.png') {
  if (!path || typeof path !== 'string' || path.trim() === '') {
    return resolveLocalPath(fallback);
  }

  const cleanPath = path.trim();

  // 1. Tratamento para Links do Google Drive
  // Suporta:
  // - drive.google.com/file/d/FILE_ID/view?usp=sharing
  // - drive.google.com/file/d/FILE_ID/view
  // - drive.google.com/file/d/FILE_ID
  // - drive.google.com/open?id=FILE_ID
  // - drive.google.com/uc?id=FILE_ID
  // - drive.google.com/uc?export=view&id=FILE_ID
  // - docs.google.com/file/d/FILE_ID/...
  if (cleanPath.includes('drive.google.com') || cleanPath.includes('docs.google.com')) {
    const fileIdMatch =
      cleanPath.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
      cleanPath.match(/\/d\/([a-zA-Z0-9_-]+)/) ||
      cleanPath.match(/[?&]id=([a-zA-Z0-9_-]+)/);

    if (fileIdMatch && fileIdMatch[1]) {
      // Endpoint de CDN de alta velocidade do Google para imagens públicas do Drive
      return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
    }
  }

  // 2. URLs diretas do Google CDN / Google Photos
  if (cleanPath.includes('googleusercontent.com')) {
    return cleanPath;
  }

  // 3. URLs externas padrão (http://, https://, data:, blob:)
  if (/^(https?:|\/\/|data:|blob:)/i.test(cleanPath)) {
    return cleanPath;
  }

  // 4. Caminhos locais relativos na pasta public
  return resolveLocalPath(cleanPath);
}

function resolveLocalPath(p) {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const clean = p.replace(/^\//, '');
  return baseUrl.endsWith('/') ? `${baseUrl}${clean}` : `${baseUrl}/${clean}`;
}