import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Buttons trigger actions or navigation. Four variants cover the full range of visual weight; all support the same five states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'ghost', 'destructive'];

const ROWS: {
  label: string;
  props: Record<string, unknown>;
}[] = [
  { label: 'Default', props: {} },
  { label: 'Hover', props: { 'data-force-hover': '' } },
  { label: 'Focus', props: { 'data-force-focus': '' } },
  { label: 'Disabled', props: { disabled: true } },
  { label: 'Loading', props: { loading: true } },
];

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-family-base)',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'var(--color-neutral-500)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  whiteSpace: 'nowrap',
};

const headerStyle: React.CSSProperties = {
  ...labelStyle,
  textAlign: 'center',
  paddingBottom: '0.75rem',
};

export const Overview: Story = {
  tags: ['!dev'],
  render: () => (
    <table
      style={{
        borderCollapse: 'separate',
        borderSpacing: '0 0.5rem',
        width: '100%',
      }}
    >
      <thead>
        <tr>
          <th style={{ width: '6rem' }} />
          {VARIANTS.map((v) => (
            <th key={v} style={headerStyle}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ROWS.map(({ label, props }) => (
          <tr key={label}>
            <td style={labelStyle}>{label}</td>
            {VARIANTS.map((v) => (
              <td key={v} style={{ textAlign: 'center', padding: '0.25rem 0.5rem' }}>
                <Button variant={v} {...(props as React.ComponentPropsWithoutRef<'button'>)}>
                  Button
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
