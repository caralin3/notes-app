import { useCallback } from 'react';

import {
  Box,
  Container,
  LinearProgress,
  NotesToolbar,
} from '@notes-app/ui-library';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer, PageHeader } from '@toolpad/core/PageContainer';
import { Navigate, Outlet, useLocation } from 'react-router';

import { useSession } from '../contexts/SessionContext';

function CustomPageHeader({ status }: { status: string }) {
  const CustomPageToolbarComponent = useCallback(
    () => (
      <NotesToolbar onDelete={() => {}} onEdit={() => {}} onMove={() => {}} />
    ),
    [status]
  );

  return <PageHeader slots={{ toolbar: CustomPageToolbarComponent }} />;
}

export function NoteLayout() {
  const { session, loading } = useSession();
  const location = useLocation();

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Container component="main" maxWidth="xs">
          <LinearProgress />
        </Container>
      </Box>
    );
  }

  if (!session) {
    // Add the `callbackUrl` search parameter
    const redirectTo = `/sign-in?callbackUrl=${encodeURIComponent(location.pathname)}`;

    return <Navigate to={redirectTo} replace />;
  }

  return (
    <DashboardLayout>
      <PageContainer slots={{ header: CustomPageHeader }}>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
