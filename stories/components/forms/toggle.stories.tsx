import {
  faItalic,
  faBold,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons"
import type { Meta, StoryFn } from "@storybook/react"
import { Icon } from "@yamada-ui/fontawesome"
import { Toggle, ToggleGroup, Wrap } from "@yamada-ui/react"
import { useState } from "react"

type Story = StoryFn<typeof Toggle>

const meta: Meta<typeof Toggle> = {
  title: "Components / Forms / Toggle",
  component: Toggle,
}

export default meta

export const basic: Story = () => {
  return <Toggle icon={<Icon icon={faBold} />} aria-label="Toggle bold" />
}

export const withText: Story = () => {
  return (
    <Toggle px="4">
      <Icon icon={faItalic} />
      Italic
    </Toggle>
  )
}

export const withSize: Story = () => {
  return (
    <>
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="primary"
        size="xs"
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="secondary"
        size="sm"
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="warning"
        size="md"
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="danger"
        size="lg"
      />
    </>
  )
}

export const withVariant: Story = () => {
  return (
    <>
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="primary"
        variant="subtle"
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="secondary"
        variant="solid"
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        variant="outline"
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        variant="unstyled"
      />
    </>
  )
}

export const withColorScheme: Story = () => {
  return (
    <>
      <Wrap gap="md">
        <Toggle
          defaultIsSelected
          colorScheme="primary"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="secondary"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="success"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="warning"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="danger"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="link"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="gray"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="neutral"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="red"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="rose"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="pink"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="orange"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="amber"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="yellow"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="lime"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="green"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="emerald"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="teal"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="cyan"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="sky"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="blue"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="indigo"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="violet"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="purple"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          colorScheme="fuchsia"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
      </Wrap>

      <Wrap gap="md">
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="primary"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="secondary"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="success"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="warning"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="danger"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="link"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="gray"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="neutral"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="red"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="rose"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="pink"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="orange"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="amber"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="yellow"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="lime"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="green"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="emerald"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="teal"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="cyan"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="sky"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="blue"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="indigo"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="violet"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="purple"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="solid"
          colorScheme="fuchsia"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
      </Wrap>

      <Wrap gap="md">
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="primary"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="secondary"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="success"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="warning"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="danger"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="link"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="gray"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="neutral"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="red"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="rose"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="pink"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="orange"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="amber"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="yellow"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="lime"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="green"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="emerald"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="teal"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="cyan"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="sky"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="blue"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="indigo"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="violet"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="purple"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
        <Toggle
          defaultIsSelected
          variant="outline"
          colorScheme="fuchsia"
          aria-label="Toggle bold"
          icon={<Icon icon={faBold} />}
        />
      </Wrap>
    </>
  )
}

export const isRounded: Story = () => {
  return (
    <Toggle
      icon={<Icon icon={faBold} />}
      aria-label="Toggle bold"
      defaultIsSelected
      isRounded
    />
  )
}

export const isDisabled: Story = () => {
  return (
    <>
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="primary"
        variant="subtle"
        defaultIsSelected
        isDisabled
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="secondary"
        variant="solid"
        defaultIsSelected
        isDisabled
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        variant="outline"
        defaultIsSelected
        isDisabled
      />
    </>
  )
}

export const isReadonly: Story = () => {
  return (
    <>
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="primary"
        variant="subtle"
        defaultIsSelected
        isReadOnly
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        colorScheme="secondary"
        variant="solid"
        defaultIsSelected
        isReadOnly
      />
      <Toggle
        icon={<Icon icon={faBold} />}
        aria-label="Toggle bold"
        variant="outline"
        defaultIsSelected
        isReadOnly
      />
    </>
  )
}

export const customControl: Story = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  return (
    <Toggle
      icon={<Icon icon={faBold} />}
      aria-label="Toggle bold"
      isSelected={isSelected}
      onChange={setIsSelected}
    />
  )
}

export const useGroup: Story = () => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined)
  const [multiValue, setMultiValue] = useState<string[]>([])

  return (
    <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle
          value="bold"
          icon={<Icon icon={faBold} />}
          aria-label="Toggle bold"
        />
        <Toggle
          value="italic"
          icon={<Icon icon={faItalic} />}
          aria-label="Toggle italic"
        />
        <Toggle
          value="underline"
          icon={<Icon icon={faUnderline} />}
          aria-label="Toggle underline"
        />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle
          value="bold"
          icon={<Icon icon={faBold} />}
          aria-label="Toggle bold"
        />
        <Toggle
          value="italic"
          icon={<Icon icon={faItalic} />}
          aria-label="Toggle italic"
        />
        <Toggle
          value="underline"
          icon={<Icon icon={faUnderline} />}
          aria-label="Toggle underline"
        />
      </ToggleGroup>
    </>
  )
}
